type LoginProps = {
  email: string;
  password: string;
};
const postLogin = async ({ email, password }: LoginProps) => {
  console.log('en postLogin');
  try {
    const response = await fetch(
      'https://backend-nocountry.onrender.com/api/v1/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }
    );
    console.log('respuesta', response.status);
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
