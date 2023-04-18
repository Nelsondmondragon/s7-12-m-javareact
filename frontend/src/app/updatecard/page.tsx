'use client';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { selectCurrentUser } from '@/features/users/userSlice';

const CrediCard = () => {
  const currentUser = useSelector(selectCurrentUser);
  const router = useRouter();

  return (
    <section className="relative min-h-[calc(100vh-280px)] bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-top">
      <div className="flex flex-col gap-4 md:gap-0 p-2 md:p-8 lg:px-20 max-w-6xl mx-auto">
        <div className="md:bg-white md:bg-opacity-60 p-2 md:px-8 md:py-16 lg:px-16  rounded-[10px] md:rounded-[20px] ">
          <div className="text-white md:text-black md:text-2xl md:font-medium">
            <h1 className="font-semibold flex items-center space-x-2 text-center md:text-left text-2xl md:text-4xl pb-4">
              <span className="hidden md:block">
                <Image
                  src={'/assets/images/wallet.svg'}
                  alt="location icon"
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] mr-2 md:mr-4"
                />
              </span>
              Datos de pago
            </h1>
            <p className="mb-3">Estos son los datos que nos brindaste.</p>
            <p className="mb-3">
              Podrás realizar cambios o eliminar tu tarjeta de forma fácil y
              segura, desde aquí:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 py-10">
            <div className="">
              <div className="w-[324px] h-[184px] relative rounded-[20px] overflow-hidden  ">
                <Image
                  className="object-cover object-center"
                  alt="credit card image"
                  src="/assets/images/creditCard.svg"
                  fill
                />
                <div className="absolute bottom-8 left-5 w-[195px]">
                  <p className="font-semibold text-lg flex justify-between">
                    <span>{currentUser.fullName}</span>
                    <span>{'12 / 24'}</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="h-[184px] px-16 mt-8 md:mt-0 md:px-8 flex flex-col justify-center mx-auto md:justify-  between space-y-10  items-center mb-8">
                <button
                  className="w-full md:w-4/5 py-4 px-10 bg-primary-600 text-base text-primary-50 rounded-md "
                  onClick={() => router.push('/creditcard')}
                >
                  Editar tarjeta
                </button>

                <button
                  className="w-full md:w-4/5 py-4 px-10  bg-white text-base text-primary-600 rounded-md"
                  onClick={() => alert('eliminar Tarjeta')}
                >
                  Eliminar tarjeta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrediCard;
