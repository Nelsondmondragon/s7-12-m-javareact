const getUserById = async (id: string) => {
  const URL = process.env.NEXT_PUBLIC_BASE_URL;

  const response = await fetch(`${URL}customers/${id}`);

  // if (!response.ok) throw new Error('Ups ! :(, Some error fetching Users');
  if (!response.ok) return undefined;

  return response.json();
};
export default getUserById;
