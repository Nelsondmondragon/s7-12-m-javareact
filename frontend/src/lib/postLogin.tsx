type LoginProps = {
  email: string;
  password: string;
};
const postLogin = async ({ email, password }: LoginProps) => {
  const URL = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const response = await fetch(`${URL}auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      return { status: response.status, msg: 'credential not valid' };
    }
    const a = await response.json();
    return a;
  } catch (error) {
    console.log('error es', error);
  }
};
export default postLogin;
