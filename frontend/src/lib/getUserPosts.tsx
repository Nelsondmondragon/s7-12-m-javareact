const getUserPosts = async (id: string) => {
  // SSR
  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts?userId=${id}`, {cache: 'force-cache'}
  //   `https://jsonplaceholder.typicode.com/posts?userId=${id}`, {cache: 'no-store'}
  // );
  // ISR
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
    { next: { revalidate: 10 } }
  );

  // if (!response.ok) throw new Error('Ups ! :(, Some error fetching User Posts');
  if (!response.ok) return undefined;

  return response.json();
};
export default getUserPosts;
