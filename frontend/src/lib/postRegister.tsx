type registerProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
const postRegister = async ({ firstName, lastName, email, password }: registerProps) => {
  console.log('en postRegister');
  try {
    const response = await fetch(
      'https://backend-nocountry.onrender.com/api/v1/auth/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
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
export default postRegister;
