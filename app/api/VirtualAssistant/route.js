// app/api/hello/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  return NextResponse.json({ message: 'Hello from API!' });
}

export async function POST(request) {
    const data = await request.json();
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or use SMTP
        auth: {
        user: 'faizdev007@gmail.com',     // Your email
        pass: 'sekmsdpycyaonbnk',     // App password (not your real password!)
        },
    });

    try {
        await transporter.sendMail({
        from: `"OVE" <faizdev007@gmail.com>`,
        to: ['faizdev007@gmail.com'], // Your receiving email address ,'Nakul@optimalvirtualemployee.com','ronnie@optimalvirtualemployee.com','dshah@optimalvirtualemployee.com'
        subject: 'New Form Submission',
        html: `<!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Email UI</title>
                    <style>
                    body {
                        margin: 0;
                        padding: 0;
                        background-color: #f6f6f6;
                        font-family: Arial, sans-serif;
                    }
                    .email-container {
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                        border-radius: 8px;
                        overflow: hidden;
                        box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
                    }
                    .email-header {
                        background-color: #0073e6;
                        color: white;
                        padding: 20px;
                        text-align: center;
                    }
                    .email-body {
                        padding: 30px;
                        color: #333333;
                    }
                    .email-footer {
                        background-color: #f0f0f0;
                        text-align: center;
                        padding: 15px;
                        font-size: 12px;
                        color: #777777;
                    }
                    .btn {
                        display: inline-block;
                        padding: 12px 24px;
                        margin-top: 20px;
                        background-color: #0073e6;
                        color: white;
                        text-decoration: none;
                        border-radius: 4px;
                    }
                    .btn:hover {
                        background-color: #005bb5;
                    }
                    @media screen and (max-width: 600px) {
                        .email-body {
                        padding: 20px;
                        }
                    }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                    <div class="email-header">
                        <h1>Virtual Assistant Query</h1>
                    </div>
                    <div class="email-body">
                        <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
                            <tbody> 
                                <tr> 
                                    <td style="padding: 8px; border: 1px solid #ccc;">Name</td> 
                                    <td style="padding: 8px; border: 1px solid #ccc;">${data.name}</td> 
                                </tr> 
                                <tr> 
                                    <td style="padding: 8px; border: 1px solid #ccc;">Email</td> 
                                    <td style="padding: 8px; border: 1px solid #ccc;">${data.email}</td> 
                                </tr> 
                                <tr> 
                                    <td style="padding: 8px; border: 1px solid #ccc;">Phone</td> 
                                    <td style="padding: 8px; border: 1px solid #ccc;">${data.phone}</td> 
                                </tr> 
                                <tr> 
                                    <td style="padding: 8px; border: 1px solid #ccc;">Message</td> 
                                    <td style="padding: 8px; border: 1px solid #ccc;">${data.message}</td> 
                                </tr>
                            </tbody> 
                        </table>
                    </div>
                    <div class="email-footer">
                        &copy; 2025 Optimal Virtual Employee. All Rights Reserved.
                    </div>
                    </div>
                </body>
            </html>
        `,
        });
        
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json({ error: 'Email not sent' }, { status: 500 });
    }
    return NextResponse.json({ received: data });
}
