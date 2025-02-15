import { EmailTemplate } from '../../Components/FormMail';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, mail, cell, message } = body;

    const { data, error } = await resend.emails.send({
      from: `${name} <contacto@josselyncastro.com>`,
      to: ['contacto@josselyncastro.com'],
      subject: `Nuevo mensaje de ${name}`,
      react: EmailTemplate({ 
        firstName: name, 
        email: mail, 
        phone: cell, 
        message: message 
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
