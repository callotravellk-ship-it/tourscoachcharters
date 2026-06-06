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
      passengers, vehicle, info 
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
        <p><strong>Pickup Location:</strong> ${pickup}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Depart Date:</strong> ${departDate}</p>
        <p><strong>Return Date:</strong> ${returnDate || 'One Way'}</p>
        <p><strong>Passengers:</strong> ${passengers}</p>
        <p><strong>Vehicle Preference:</strong> ${vehicle}</p>
        <p><strong>Additional Info:</strong> ${info}</p>
      `
    });

    // 2. Email to the CUSTOMER (The Auto-Reply)
    const customerEmail = resend.emails.send({
      from: 'Tours Coach Charters <quotes@tourscoachcharter.com>',
      to: [email], // This dynamically grabs whatever email they typed into the form
      subject: 'We received your quote request!',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #1e3a8a;">Hi ${firstName},</h2>
          <p>Thank you for reaching out to <strong>Tours Coach Charters</strong>!</p>
          <p>This is a quick automated message to let you know that our logistics team has successfully received your quote request for the trip from <strong>${pickup}</strong> to <strong>${destination}</strong>.</p>
          <p>We are currently reviewing your passenger count and vehicle preferences to calculate the best possible rate. One of our booking specialists will be in touch with you shortly to discuss the details.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>The Tours Coach Charters Team</strong></p>
          <p><a href="https://tourscoachcharter.com" style="color: #dc2626; text-decoration: none; font-weight: bold;">tourscoachcharter.com</a> | (416) 269-9555</p>
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