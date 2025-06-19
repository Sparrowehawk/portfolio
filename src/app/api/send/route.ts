import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { ContactEmailTemplate } from '@/components/contact-email-template'
import { type ContactEmailTemplateProps } from '@/types'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { firstName, lastName, email, message } =
    (await request.json()) as ContactEmailTemplateProps;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Sparrowe Contact Form <noreply@contact.sparrowe.dev>',
      to: 'hamidjamal@hotmail.co.uk',
    
      subject: `New message from ${firstName} ${lastName}`,

      reply_to: email,

      react: ContactEmailTemplate({
        firstName,
        lastName,
        email,
        message,
      }),
    });

    if (error) {
      return NextResponse.json(
        { message: 'Error sending email from Resend', error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully!', data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'An unexpected error occurred.', error },
      { status: 500 }
    );
  }
}