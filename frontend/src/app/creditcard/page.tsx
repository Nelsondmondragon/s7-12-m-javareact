// 'use client';
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
        <div className="bg-white bg-opacity-60 p-2 md:px-8 md:pt-16 lg:px-16  rounded-[10px] md:rounded-none md:rounded-t-[20px] ">
          <h2 className="font-semibold text-center md:text-left mb-3 md:mb-10 text-2xl md:text-4xl">
            Ya casi terminamos...
          </h2>
          <div className="px-2 md:px-4 py-2 md:py-4 lg:px-10 lg:py-6">
            <h1 className=" flex items-center space-x-2 text-center text-2xl md:text-4xl pb-4">
              <span className="hidden md:block">
                <Image
                  src={'/assets/images/wallet.svg'}
                  alt="location icon"
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] mr-2 md:mr-4"
                />
              </span>
              Datos de contacto
            </h1>
          </div>{' '}
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
        </div>

        <div className="bg-neutral-100 bg-opacity-85 p-4 md:px-8 lg:px-16 md:pb-16  rounded-[10px] md:rounded-none md:rounded-b-[20px] md:flex md:gap-8 md:flex-row-reverse ">
          <div className="flex-1">
            <h2 className="font-semibold text-center md:text-left mb-3 md:mb-10 text-2xl md:text-4xl">
              Aqui van los datos de la tarjeta
            </h2>
            <div>
              <p className=" h-32 "></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
