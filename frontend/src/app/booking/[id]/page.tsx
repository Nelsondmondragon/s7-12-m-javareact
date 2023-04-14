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
    let user =
      typeof window !== 'undefined' && localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')).firstName
        : null;
    user === null ? setShowModal(true) : router.push('/pay');
  };

  let item = JSON.parse(localStorage.getItem('cars'));
  console.log(item);

  return (
    <div className="min-h-screen flex justify-center bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-center">
      <div className="w-full h-fit mx-10 my-10 p-10 bg-white/80 rounded-3xl flex flex-col items-center gap-8">
        {item.map((it) => {
          return (
            <div key={it.id} className="w-11/12 flex">
              <Image
                src={`/assets/images/booking/vh-small.jpg`}
                alt={it.model}
                width={200}
                height={200}
                className="rounded-3xl"
              />
              <div className="flex flex-col w-5/12 justify-around ml-14">
                <h3 className="text-3xl font-medium">{it.model}</h3>
                <p className="text-2xl leading-7">
                  {it.make} {it.year} de capacidad de: {it.passengers}
                </p>
                <p className="text-3xl font-medium">$ 50000</p>
              </div>
              <button
                className="bg-primary-600 self-end w-[288px] h-[59px] rounded-xl text-white text-2xl"
                onClick={handleBooking}
              >
                Reservar
              </button>
            </div>
          );
        })}
      </div>
      {showModal ? <ModalInicio setShowModal={setShowModal} /> : null}
      {/* <ModalInicio/> */}
      {/* <ModalLoading /> */}
      {/* <ModalConfirm /> */}
    </div>
  );
};

export default BookingCar;
