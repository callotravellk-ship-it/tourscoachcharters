import { Resend } from 'resend';

// This grabs the secure key you just put into Vercel
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      firstName, lastName, email, phone, 
      pickup, destination, departDate, returnDate, 
      passengers, vehicle, info 
    } = req.body;

    // Send the email via Resend
    const data = await resend.emails.send({
      from: 'Quotes <quotes@tourscoachcharter.com>', // The domain you verified in Resend
      to: ['acmrickaaz@gmail.com'], // Where you want to receive the quote alerts
      reply_to: email, // This allows you to hit "Reply" and email the customer directly
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

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}