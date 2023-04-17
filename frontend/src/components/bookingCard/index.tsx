"use client"

import Image from 'next/image';

export const BookingCard = ({btn1, btn2}) => {
    const car = JSON.parse(localStorage.getItem('carSelected'))
    const dates = JSON.parse(localStorage.getItem('bookingDates'))


    
    return (
        <div className="bg-primary-700 rounded-[20px] w-[90%] md:w-auto">
            <Image
                src={car.imageResource?.urlSecure}
                width={591}
                height={417}
                alt="vehicle large"
                className="rounded-t-[20px]"
            />
            <div className="p-5">
                <h3 className="text-center text-[18px] md:text-[23px] font-bold">Vehículo {car.category.name}</h3>
                <hr className="h-[2px] bg-white" />
                <div className="flex flex-col list-inside mt-2 text-[16px] md:text-[18px]">
                    <p className="mt-3">Datos de la reserva:</p>
                    <li className="ml-2">Capacidad de carga: {car.category.capacityLimit} Kg</li>
                    <li className="ml-2">Fecha: {dates.start.split("T")[0]} al {dates.end.split("T")[0]}</li>
                    <li className="ml-2">Hora recogida: {dates.start.split("T")[1]}</li>
                    <li className="ml-2">Hora devolución: {dates.end.split("T")[1]}</li>
                    <li className="ml-2">Oficina: {dates.location}</li>
                </div>
                <div className="flex justify-around mt-9">
                    <button className="text-[16px] md:text-[23px] md:w-[198px] font-semibold text-[#FAFAFA] w-[130px]">
                        {btn1}
                    </button>
                    <button className="bg-[#FAFAFA] rounded-[10px] w-[130px] md:w-[167px] h-[47px] text-primary-600 text-[16px] md:text-[23px] font-semibold">
                        {btn2}
                    </button>
                </div>
            </div>
        </div>
    );
};
