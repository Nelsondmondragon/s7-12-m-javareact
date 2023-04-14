import Image from 'next/image';

export const BookingCard = ({btn1, btn2}) => {
    return (
        <div className="bg-primary-700 rounded-[20px] w-[90%] md:w-auto">
            <Image
                src={`/assets/images/booking/vehicle-XL.jpg`}
                width={591}
                height={417}
                alt="vehicle large"
                className="rounded-t-[20px]"
            />
            <div className="p-5">
                <h3 className="text-center text-[18px] md:text-[23px] font-bold">CAMIÓN CHICO</h3>
                <hr className="h-[2px] bg-white" />
                <div className="flex flex-col list-inside mt-2 text-[16px] md:text-[18px]">
                    <li className="ml-2">Caja automática Datos de la reserva:</li>
                    <li className="ml-2">Capacidad de carga: 1000kg</li>
                    <p className="mt-3">Datos de la reserva:</p>
                    <li className="ml-2">Fecha: 10 al 11 de Mayo 2023</li>
                    <li className="ml-2">Hora recogida: 10:00hs</li>
                    <li className="ml-2">Hora devolución: 10:00hs</li>
                    <li className="ml-2">Oficina: CABA</li>
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
