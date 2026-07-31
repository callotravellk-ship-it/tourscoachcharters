import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { db } from '../../../lib/firebase'; // Imports your new Firebase setup
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { 
      firstName, lastName, email, phone, 
      pickup, destination, departDate, returnDate, 
      pickupTime, returnTime, 
      passengers, vehicle, info, tripType 
    } = body;

    // 1. SAVE TO FIREBASE CRM
    // This creates a new record in your "leads" collection
    const leadPromise = addDoc(collection(db, "leads"), {
      firstName,
      lastName,
      email,
      phone,
      pickup,
      destination,
      departDate,
      returnDate: returnDate || null,
      pickupTime,
      returnTime: returnTime || null,
      passengers,
      vehicle,
      info: info || '',
      tripType,
      status: "New", // Tags it as a fresh lead for the dashboard
      createdAt: serverTimestamp(), // Logs the exact submission time
      quotedPrice: null, // Empty field for agents to fill later
      assignedVehicle: "", // Empty field for agents to fill later
    });

    // 2. EMAIL SENT TO YOUR TEAM
    const adminEmail = resend.emails.send({
      from: 'Quotes <quotes@tourscoachcharter.com>',
      to: ['info@tourscoach.ca'],
      cc: ['info@tourscoachcharter.com'],
      bcc: ['acmrickaaz@gmail.com'],
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
        <p><strong>Pick Up Time:</strong> ${pickupTime}</p>
        <p><strong>Return Date:</strong> ${returnDate || 'N/A'}</p>
        <p><strong>Return Time:</strong> ${returnTime || 'N/A'}</p>
        <p><strong>Passengers:</strong> ${passengers}</p>
        <p><strong>Vehicle Preference:</strong> ${vehicle}</p>
        <p><strong>Additional Info:</strong> ${info || 'None provided.'}</p>
      `
    });

    // 3. AUTO-REPLY EMAIL SENT TO THE CUSTOMER
    const customerEmail = resend.emails.send({
      from: 'Canada Tours Coach LTD <quotes@tourscoachcharter.com>',
      to: [email],
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

    // Execute the database save and both emails simultaneously for maximum speed
    await Promise.all([leadPromise, adminEmail, customerEmail]);
    
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Error processing quote:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}