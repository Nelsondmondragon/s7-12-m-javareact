const getUser = async (token: string) => {
  console.log('en getUser');
  const response = await fetch(`https://api.escuelajs.co/api/v1/auth/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    return { status: response.status, msg: 'error' };
  }
  return await response.json();
};
export default getUser;
