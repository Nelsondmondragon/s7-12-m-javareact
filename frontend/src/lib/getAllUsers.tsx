const getAllUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!response.ok) throw new Error('Ups ! :(, Some error fetching Users');

  return response.json();
};
export default getAllUsers;
