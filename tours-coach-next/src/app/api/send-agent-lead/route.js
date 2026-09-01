import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { 
      agentEmail, firstName, lastName, email, phone, 
      pickup, destination, departDate, pickupTime, 
      returnDate, returnTime, passengers, vehicle, tripType, info 
    } = body;

    const { data, error } = await resend.emails.send({
      from: 'Tours Coach Charters <quotes@tourscoachcharter.com>', 
      to: [agentEmail],
      reply_to: email, // Allows the agent to hit "Reply" and email the customer directly
      subject: `New Lead Assigned: ${firstName} ${lastName} - ${tripType === 'return' ? 'Round Trip' : 'One Way'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0f172a; padding: 24px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 24px;">New Lead Assigned</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">Tours Coach Charters CRM</p>
          </div>
          
          <div style="padding: 32px;">
            <p style="font-size: 16px;">Hello,</p>
            <p style="font-size: 16px;">A new charter quote request has been approved and assigned to you. Please review the details below and contact the customer to provide official pricing.</p>
            
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 24px 0;">
              <h2 style="margin-top: 0; color: #0f172a; font-size: 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Customer Contact</h2>
              <p style="margin: 4px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p style="margin: 4px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 4px 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            </div>

            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 24px 0;">
              <h2 style="margin-top: 0; color: #0f172a; font-size: 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Trip Logistics</h2>
              <p style="margin: 4px 0;"><strong>Passengers:</strong> ${passengers}</p>
              <p style="margin: 4px 0;"><strong>Requested Fleet:</strong> ${vehicle === 'any' ? 'No Preference' : vehicle}</p>
              <p style="margin: 4px 0;"><strong>Trip Type:</strong> ${tripType === 'return' ? 'Round Trip' : 'One Way'}</p>
              
              <h3 style="font-size: 14px; margin-top: 16px; margin-bottom: 4px;">Departure</h3>
              <p style="margin: 4px 0;"><strong>From:</strong> ${pickup}</p>
              <p style="margin: 4px 0;"><strong>Date & Time:</strong> ${departDate} at ${pickupTime}</p>
              
              <h3 style="font-size: 14px; margin-top: 16px; margin-bottom: 4px;">Destination</h3>
              <p style="margin: 4px 0;"><strong>To:</strong> ${destination}</p>
              ${tripType === 'return' ? `<p style="margin: 4px 0;"><strong>Return Date & Time:</strong> ${returnDate} at ${returnTime}</p>` : ''}
            </div>

            ${info ? `
            <div style="background-color: #fffbeb; border: 1px solid #fef3c7; border-radius: 8px; padding: 20px; margin: 24px 0;">
              <h2 style="margin-top: 0; color: #b45309; font-size: 16px; border-bottom: 2px solid #fef3c7; padding-bottom: 8px;">Customer Notes</h2>
              <p style="margin: 4px 0; font-style: italic;">"${info}"</p>
            </div>
            ` : ''}

            <p style="font-size: 14px; color: #64748b; margin-top: 32px; text-align: center;">
              Log into the <a href="https://www.tourscoachcharter.com/crm" style="color: #2563eb;">CRM Dashboard</a> to update this lead's status once quoted.
            </p>
          </div>
        </div>
      `
    });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Error sending lead to agent:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}