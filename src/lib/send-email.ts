
import { Resend } from 'resend';

interface SendWelcomeEmailProps {
    name?: string;
    email?: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendWelcomeEmail = async({ name,email }: SendWelcomeEmailProps) => {
    console.log('[lib/send]', [email], name)
    // const data = await resend.emails({
    //     from: 'Masatafit <Onboarding@masatafit.com>',
    //     to: [email!],
    //     subject: 'Welcome to Masatafit!',
    //     react: 'WelcomeEmail',
    // });
    return 'data';
};
