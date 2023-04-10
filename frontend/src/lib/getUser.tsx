const getUser = async (token: string) => {
  console.log('en getUser');
  const response = await fetch(
    `https://backend-nocountry.onrender.com/api/v1/customers/profile`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    return { status: response.status, msg: 'error' };
  }
  return await response.json();

  return response.json();
};
export default getUser;
