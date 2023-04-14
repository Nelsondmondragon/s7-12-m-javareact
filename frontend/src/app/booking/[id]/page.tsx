'use client';
import Image from 'next/image';
import cars from '../../../cars.json';
import ModalInicio from '@/components/ui/ModalInicio';
import ModalLoading from '@/components/ui/ModalLoading';
import ModalConfirm from '@/components/ui/ModalConfirm';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const BookingCar = ({ params }) => {
    const result = cars.filter((vh) => vh.categoria === params.id);

    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const handleBooking = () => {
        let user = localStorage.getItem('user');
        user === null ? setShowModal(true) : router.push('/pay');
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
                {result.length === 0 ? (
                    <p>No hay resultados para su busqueda o regrese más tarde</p>
                ) : (
                    result.map((it) => {
                        return (
                            <div key={it.id} className="w-[96%] flex gap-2">
                                <Image
                                    src={`/assets/images/booking/vh-small.jpg`}
                                    alt={it.title}
                                    width={200}
                                    height={200}
                                    className="rounded-3xl object-contain"
                                />
                                <div className="flex flex-col justify-around w-full">
                                    <h3 className="text-lg md:text-[29px] font-semibold">{it.title}</h3>
                                    <p className="leading-5 md:leading-7 md:text-[23px] md:mt-4">
                                        {it.info}
                                    </p>
                                    <div className="flex justify-between items-end w-full">
                                        <p className="md:text-[29px] font-semibold">$ {it.price}</p>
                                        <button
                                            onClick={handleBooking}
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
