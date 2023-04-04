const getUserById = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  // if (!response.ok) throw new Error('Ups ! :(, Some error fetching Users');
  if (!response.ok) return undefined;

  return response.json();
};
export default getUserById;
