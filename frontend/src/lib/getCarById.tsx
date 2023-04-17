const getCarById = async (id) => {
    const URL = process.env.NEXT_PUBLIC_BASE_URL;
    try {
      const response = await fetch(`${URL}cars/${id}`);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  export default getCarById;
  