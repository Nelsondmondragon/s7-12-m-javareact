type registerProps = {
  email: string;
  password: string;
  fullName: string;
  address: string;
  dni: string;
  numberLicence: string;
  dateExpiration: string;
  idLocation: string;
  card?: {
    numberCard: string;
    fullName: string;
    date_expiration: string;
    cvv: string;
  };
};

const postRegister = async (registerData: registerProps) => {
  const URL = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const response = await fetch(`${URL}auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
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
export default postRegister;
