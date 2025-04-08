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
      subject: 'New Volunteer Application',
      html: `
        <h2>New Volunteer Application Received</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Availability:</strong> ${data.availability}</p>
        <p><strong>Areas of Interest:</strong> ${data.interests.join(', ')}</p>
        <p><strong>Experience:</strong> ${data.experience}</p>
      `
    }

    // Email to the volunteer
    const volunteerMailOptions = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: 'Thank You for Your Volunteer Application',
      html: `
        <h2>Thank You for Your Interest in Volunteering!</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your volunteer application and appreciate your interest in serving our community.</p>
        <p>Our team will review your application and contact you soon to discuss next steps.</p>
        <br>
        <p>Best regards,</p>
        <p>The WaheGuru Team</p>
      `
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(orgMailOptions),
      transporter.sendMail(volunteerMailOptions)
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 