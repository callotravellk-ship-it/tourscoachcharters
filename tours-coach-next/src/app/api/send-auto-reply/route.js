import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, firstName, pickup, destination } = body;

    const { data, error } = await resend.emails.send({
      from: 'Tours Coach Charters <quotes@tourscoachcharter.com>',
      to: [email],
      reply_to: 'info@tourscoachcharter.com',
      subject: 'Quote Request Received - Tours Coach Charters',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #1e3a8a; padding: 24px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 24px;">Request Received!</h1>
          </div>
          
          <div style="padding: 32px;">
            <p style="font-size: 16px;">Hi ${firstName},</p>
            <p style="font-size: 16px;">Thank you for requesting a charter quote with Tours Coach Charters! We have successfully received your itinerary details for your trip from <strong>${pickup}</strong> to <strong>${destination}</strong>.</p>
            
            <p style="font-size: 16px;">Our logistics team is currently reviewing your route and checking vehicle availability. An agent will email you an official pricing quote shortly.</p>
            
            <p style="font-size: 16px;">If you need immediate assistance, please reply to this email or call us at <strong>(416) 269-9555</strong>.</p>
            
            <p style="font-size: 14px; color: #64748b; margin-top: 32px;">
              Best regards,<br/>
              The Tours Coach Charters Team
            </p>
          </div>
        </div>
      `
    });

    if (error) throw new Error(error.message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending auto-reply:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}