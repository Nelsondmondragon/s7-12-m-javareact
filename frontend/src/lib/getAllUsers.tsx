const getAllUsers = async () => {
  const URL = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${URL}customers/all`);

  if (!response.ok) throw new Error('Ups ! :(, Some error fetching Users');

  return response.json();
};
export default getAllUsers;
