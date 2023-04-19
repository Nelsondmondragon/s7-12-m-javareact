const getAllCategories = async () => {
  const URL = process.env.NEXT_PUBLIC_BASE_URL;

  const response = await fetch(`${URL}categories/all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    return { status: response.status, msg: 'error' };
  }
  return await response.json();
};
export default getAllCategories;
