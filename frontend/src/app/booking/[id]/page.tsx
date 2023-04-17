'use client';
import Image from 'next/image';
//import cars from '../../../cars.json';
import ModalInicio from '@/components/ui/ModalInicio';
import ModalLoading from '@/components/ui/ModalLoading';
import ModalConfirm from '@/components/ui/ModalConfirm';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import getCarById from '@/lib/getCarById';

const BookingCar = ({ params }) => {
    //const result = cars.filter((vh) => vh.categoria === params.id);

    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const handleBooking = async (id) => {
        let user = localStorage.getItem('user');
        user === null ? setShowModal(true) : router.push('/pay');
        const getId = await getCarById(id)
        localStorage.setItem('carSelected', JSON.stringify(getId));
    };
    let item;

    if (localStorage.getItem('cars') === 'undefined') {
        item = [];
    } else {
        if (Array.isArray(JSON.parse(localStorage.getItem('cars')))) {
            item = JSON.parse(localStorage.getItem('cars'));
        } else {
            item = [];
            console.log('vamos');
        }
    }
    console.log('resultado ' + item);

    return (
        <div className="min-h-screen flex justify-center bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-center">
            <div className="w-[92%] sm:w-[90%] h-fit my-10 py-[2%] bg-white/80 rounded-3xl flex flex-col items-center gap-8">
                {item.length === 0 ? (
                    <p>No hay resultados para su busqueda o regrese más tarde</p>
                ) : (
                    item.map((car) => {
                        return (
                            <div key={car.id} className="w-[96%] flex gap-2">
                                <Image
                                    src={car.imageResource?.urlSecure}
                                    alt={car.make}
                                    width={130}
                                    height={130}
                                    className="rounded-3xl object-contain md:w-[200px]"
                                />
                                <div className="flex flex-col justify-around w-full">
                                    <h3 className="text-lg md:text-[29px] font-semibold">{car.make}</h3>
                                    <p className="leading-5 md:leading-7 md:text-[23px] md:mt-4">
                                        Vehículo de tamaño {car.category.name}, con medidas de 
                                        {' '}{car.length / 100} x {car.width / 100} x {car.height / 100}. <span className='hidden sm:block'>Perfecto para mudanzas cortas y rápidas</span>
                                    </p>
                                    <div className="flex justify-between items-end w-full">
                                        <p className="md:text-[29px] font-semibold">
                                            $ {car.category.hourlyPrice}
                                        </p>
                                        <button
                                            onClick={()=> handleBooking(car.id)}
                                            className="bg-primary-600  w-[78px] md:w-[288px] h-[27px] md:h-[59px] rounded-[5px] md:rounded-[10px] text-white md:text-2xl"
                                        >
                                            Reservar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
            {showModal ? <ModalInicio setShowModal={setShowModal} /> : null}
        </div>
    );
};

export default BookingCar;
