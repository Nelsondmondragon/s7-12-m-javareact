const getAllCars = async () => {
    try {
        const response = await fetch(`https://backend-nocountry.onrender.com/api/v1/bookings/all`);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};
export default getAllCars;
