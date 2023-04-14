const postCarsAvailable = async ({ id, start, end, startPlace}) => {
  try {
    console.log(id, start, end);
    const response = await fetch(
      `https://s7-12-m-javareact-production.up.railway.app/api/v1/cars/getbyfilters?idCategory=${id}&startTime=${start}&endTime=${end}&idLocation=${startPlace}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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
