import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Email to the organization
    const orgMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: 'New Event Registration',
      html: `
        <h2>New Event Registration Received</h2>
        <p><strong>Event:</strong> ${data.eventTitle}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
      `
    }

    // Email to the participant
    const participantMailOptions = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: `Event Registration Confirmation - ${data.eventTitle}`,
      html: `
        <h2>Event Registration Confirmation</h2>
        <p>Dear ${data.name},</p>
        <p>Thank you for registering for <strong>${data.eventTitle}</strong>.</p>
        <p>We have received your registration and will send you event details closer to the date.</p>
        <br>
        <p>Best regards,</p>
        <p>The WaheGuru Team</p>
      `
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(orgMailOptions),
      transporter.sendMail(participantMailOptions)
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Failed to process registration' },
      { status: 500 }
    )
  }
} 