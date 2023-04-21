const createBooking = async (token, idcar, id) => {
    try {
      const {start, end, location, locationend, driver, pawn} = JSON.parse(localStorage.getItem("bookingDates"))

      const response = await fetch(
        `https://s7-12-m-javareact-production.up.railway.app/api/v1/bookings/create?carId=${idcar}&customerId=${id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            "startTime": start,
            "endTime": end,
            "pickUpLocation": location,
            "dropOffLocation": locationend,
            "assignedDriver": driver,
            "helperPawn": pawn
          })
        }
      );
      const a = await response.json();
      return a;
    } catch (error) {
      console.log(error);
    }
  };
  
  export default createBooking;