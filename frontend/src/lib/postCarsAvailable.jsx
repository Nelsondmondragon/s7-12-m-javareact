/**
 * 
 *    const response = await fetch(
      `https://backend-nocountry.onrender.com/api/v1/cars/getbyfilters?id_category=${id}&pickUpLocation=Catan&startTime=${start}&endTime=${end}`,
 
 */

const postCarsAvailable = async ({ id, start, end, token }) => {
  const URL = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    console.log(id, start, end);
    const response = await fetch(
      `${URL}cars/getbyfilters?id_category=${id}&pickUpLocation=Catan&startTime=${start}&endTime=${end}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const a = await response.json();
    return a;
  } catch (error) {
    console.log(error);
  }
};

export default postCarsAvailable;
