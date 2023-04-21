'use client';
import { FormCreditCard } from '@/components/payments/FormPay';
// import { useRouter } from 'next/navigation';
// import { FaArrowLeft } from 'react-icons/fa';

import Image from 'next/image';

export default function CrediCard() {
  // const router = useRouter();

  // const handleGoBack = () => {
  //   router.back();
  // };
  return (
    <section className="relative min-h-[calc(100vh-280px)] bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-top">
      {/* <button
        onClick={handleGoBack}
        className="md:hidden absolute top-2 left-4 "
      >
        <div className="flex items-center space-x-4 text-white text-lg">
          <FaArrowLeft />
          <p>Nosotros</p>
        </div>
      </button> */}
      <div className="flex flex-col gap-4 md:gap-0 p-2 md:p-8 lg:px-20 ">
        <div className="bg-white bg-opacity-60 p-2 md:px-8 md:py-16 lg:px-16  rounded-[10px] md:rounded-[20px] ">
          <h2 className="font-semibold text-center md:text-left mb-3 md:mb-10 text-2xl md:text-4xl">
            Ya casi terminamos...
          </h2>
          <div className="hidden md:block">
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
              Información de pago
            </h1>
          </div>
          <p className="mb-3">
            Esta sección podrás completarla ahora, o mas tarde.
          </p>
          <p className="mb-3">
            Recorda que para realizar una reserva, deberás presentar una tarjeta
            de crédito a tu nombre.
          </p>
          <p className="mb-3">
            Los datos aportados serán solo a fin de asegurar la reserva. Los
            pagos siempre serán realizados en la oficina seleccionada, cuando
            retires el vehículo.
          </p>

          <div className="max-w-lg mx-auto">
            <FormCreditCard />
          </div>
        </div>
      </div>
    </section>
  );
}
