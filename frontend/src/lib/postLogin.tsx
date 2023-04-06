type LoginProps = {
  email: string;
  password: string;
};
const postLogin = async ({ email, password }: LoginProps) => {
  try {
    const response = await fetch(
      'https://node-server-navy-rho.vercel.app/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const a = await response.json();
    console.log('respuesta', a);
    if (!response.ok) throw new Error('Ups ! :(, Some error fetching Users');
    return a;
  } catch (error) {
    console.log(error);
  }
};
export default postLogin;
