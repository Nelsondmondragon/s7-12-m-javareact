type VerifyEmailProps = {
  email: string;
};
const verifyEmail = async ({ email }: VerifyEmailProps) => {
  const URL = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const response = await fetch(`${URL}customers/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const res = await response.json();
    return res;
  } catch (error) {
    console.log('error es', error);
  }
};
export default verifyEmail;
