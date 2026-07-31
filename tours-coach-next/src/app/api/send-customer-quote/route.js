import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { 
      email, firstName, lastName, 
      pickup, destination, departDate, 
      quotePrice, depositAmount, assignedVehicle, tripType 
    } = body;

    const { data, error } = await resend.emails.send({
      from: 'Canada Tours Coach LTD <quotes@tourscoachcharter.com>', // Must be your verified Resend domain
      to: [email],
      reply_to: 'info@tourscoach.ca', // So customers can reply directly to your team
      subject: `Your Charter Quote: ${pickup} to ${destination}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #1e3a8a; padding: 24px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 24px;">Your Official Quote</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">Canada Tours Coach LTD</p>
          </div>
          
          <div style="padding: 32px;">
            <p style="font-size: 16px;">Hi ${firstName},</p>
            <p style="font-size: 16px;">Thank you for your patience! We have reviewed your itinerary and are pleased to offer you the following quote for your upcoming trip.</p>
            
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 24px 0;">
              <h2 style="margin-top: 0; color: #1e3a8a; font-size: 18px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Trip Details</h2>
              <p><strong>Route:</strong> ${pickup} &rarr; ${destination}</p>
              <p><strong>Type:</strong> ${tripType === 'return' ? 'Round Trip' : 'One Way'}</p>
              <p><strong>Date:</strong> ${departDate}</p>
              <p><strong>Assigned Vehicle:</strong> ${assignedVehicle}</p>
            </div>

            <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 20px; margin: 24px 0;">
              <h2 style="margin-top: 0; color: #1d4ed8; font-size: 18px; border-bottom: 2px solid #bfdbfe; padding-bottom: 8px;">Pricing Summary</h2>
              <p style="font-size: 18px; margin: 10px 0;"><strong>Total Price:</strong> <span style="color: #047857; font-size: 22px;">$${quotePrice} CAD</span></p>
              <p style="margin: 10px 0;"><strong>Required Deposit:</strong> $${depositAmount} CAD</p>
            </div>

            <p style="font-size: 16px;"><strong>How to secure your booking:</strong></p>
            <p style="font-size: 16px;">To confirm your reservation and lock in your vehicle, please reply directly to this email or call us at <strong>(416) 269-9555</strong> to process your deposit.</p>
            <p style="font-size: 14px; color: #64748b;"><em>*Quotes are valid for 7 days and subject to vehicle availability at the time of booking.</em></p>
          </div>
        </div>
      `
    });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Error sending quote to customer:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}