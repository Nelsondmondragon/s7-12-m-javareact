type registerProps = {
  fullName: string;
  email: string;
  password: string;
  city: string;
  adress: string;
};
const postRegister = async ({
  fullName,
  email,
  password,
  city,
  adress,
}: registerProps) => {
  const URL = process.env.NEXT_PUBLIC_BASE_URL;

  console.log('en postRegister');
  try {
    const response = await fetch(`${URL}auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName,
        email,
        password,
        city,
        adress,
      }),
    });
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
export default postRegister;
