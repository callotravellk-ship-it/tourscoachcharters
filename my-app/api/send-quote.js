import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      firstName, lastName, email, phone, 
      pickup, destination, departDate, returnDate, 
      passengers, vehicle, info, tripType 
    } = req.body;

    // 1. Email to YOU (The Admin Alert)
    const adminEmail = resend.emails.send({
      from: 'Quotes <quotes@tourscoachcharter.com>',
      to: ['acmrickaaz@gmail.com'], 
      reply_to: email, 
      subject: `New Quote Request from ${firstName} ${lastName}`,
      html: `
        <h2>New Charter Quote Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Trip Type:</strong> ${tripType === 'return' ? 'Round Trip' : 'One Way'}</p>
        <p><strong>Pickup Location:</strong> ${pickup}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Depart Date:</strong> ${departDate}</p>
        <p><strong>Return Date:</strong> ${returnDate || 'N/A'}</p>
        <p><strong>Passengers:</strong> ${passengers}</p>
        <p><strong>Vehicle Preference:</strong> ${vehicle}</p>
        <p><strong>Additional Info:</strong> ${info || 'None provided.'}</p>
      `
    });

    // 2. Email to the CUSTOMER (The Auto-Reply with Updated Copy)
    const customerEmail = resend.emails.send({
      from: 'Canada Tours Coach LTD <quotes@tourscoachcharter.com>',
      to: [email], // This dynamically grabs whatever email they typed into the form
      subject: 'We received your quote request!',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
          <p style="font-size: 16px;">Hi ${firstName},</p>
          
          <p style="font-size: 16px;">Thank you for reaching out to us!</p>
          
          <p style="font-size: 16px;">We’ve received your request and we are reviewing the details to provide you with the most accurate and competitive options.</p>
          
          <p style="font-size: 16px;">Please allow us some time to work on this, we’ll get back to you with a detailed quote as soon as possible.</p>
          
          <br/>
          <p style="font-size: 16px;">Best regards,</p>
          <p style="font-size: 16px;"><strong>The Team at Canada Tours Coach LTD</strong></p>
          <p style="font-size: 14px;"><a href="https://tourscoachcharter.com" style="color: #dc2626; text-decoration: none; font-weight: bold;">tourscoachcharter.com</a> | (416) 269-9555</p>
        </div>
      `
    });

    // Send both emails at the exact same time
    await Promise.all([adminEmail, customerEmail]);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}