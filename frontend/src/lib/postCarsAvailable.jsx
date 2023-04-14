const postCarsAvailable = async ({ id, start, end }) => {
  try {
    console.log(id, start, end);
    const response = await fetch(
      `https://s7-12-m-javareact-production.up.railway.app/api/v1/cars/getbyfilters?idCategory=${id}&startTime=2023-01-12T11:00:00&endTime=2023-01-15T12:00:00&idLocation=02000010`,
      {
        method: "GET",
        headers: {      
          "Content-Type": "application/json"         
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
