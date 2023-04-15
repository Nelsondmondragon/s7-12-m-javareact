const getAllCars = async () => {
  const URL = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const response = await fetch(`${URL}cars/all`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
export default getAllCars;
