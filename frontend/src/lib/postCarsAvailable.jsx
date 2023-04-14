const postCarsAvailable = async ({ id, start, end }) => {
  try {
    console.log(id, start, end);
    const response = await fetch(
      `https://backend-nocountry.onrender.com/api/v1/cars/getbyfilters?id_category=${id}&pickUpLocation=Catan&startTime=${start}&endTime=${end}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXJpYUBjb3JyZW8uY29tIiwiaWF0IjoxNjgxMzcyNTI4LCJleHAiOjE2ODEzNzYxMjh9.n2Ev-KuKG97hnzeJaS48l1tgUxvj8ubGfmyaadfB9YU`,
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
