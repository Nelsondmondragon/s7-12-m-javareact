type LoginProps = {
  email: string;
  password: string;
};
const postLogin = async ({ email, password }: LoginProps) => {
  const response = await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) throw new Error('Ups ! :(, Some error fetching Users');
  return response.json();
};
export default postLogin;
