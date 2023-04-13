// 'use client';
// import { useRouter } from 'next/navigation';
// import { FaArrowLeft } from 'react-icons/fa';

import Image from 'next/image';

export default function About() {
  // const router = useRouter();

  // const handleGoBack = () => {
  //   router.back();
  // };
  return (
    <section className="relative min-h-screen bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-top">
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
        <div className="bg-white bg-opacity-60 p-2 md:px-8 lg:px-16  rounded-[10px] md:rounded-none md:rounded-t-[20px] ">
          <h2 className="font-semibold text-center md:text-left mb-3 md:mb-10 text-2xl md:text-4xl">
            ¿Quienes somos en MoveAr?
          </h2>
          <p className="mb-3">
            Somos una empresa joven que tiene como objetivo facilitarte la vida.
          </p>
          <p className="mb-3">
            Las mudanzas pueden ser estresantes, costosas y difíciles de
            coordinar y por ende, nosotros te queremos ayudar durante todo el
            proceso.
          </p>
          <p className="mb-3">
            En <span className="font-semibold "> MOVE AR </span> te ofrecemos la
            posibilidad de alquilar un vehículo de carga para que puedas
            organizar tu mudanza, cuando quieras y en los horarios que puedas.
            Sin depender de intermediarios y ahorrando mucho dinero.
          </p>
          <p className="mb-3">
            <span className="font-semibold ">Nuestra misión</span>: Ser
            proveedores de soluciones para usuarios que prefieran realizar
            mudanzas o traslado de muebles y cargas, por cuenta propia. Brindar
            un servicio de alquiler de vehículos, de forma eficiente y práctica.
          </p>
          <p className="mb-3">
            <span className="font-semibold ">Nuestra visión</span>: Líderes en
            el mercado de alquiler de vehículos de carga en Argentina.
          </p>
        </div>

        <div className="bg-white bg-opacity-60 p-4 md:px-8 lg:px-16  rounded-[10px] md:rounded-none md:rounded-b-[20px] md:flex md:gap-8 md:flex-row-reverse ">
          <div className="flex-1">
            <h2 className="font-semibold text-center md:text-left mb-3 md:mb-10 text-2xl md:text-4xl">
              Nuestro personal
            </h2>
            <div>
              <p className="">
                Nuestro personal se encarga de asistirte en cada paso. También
                contamos con servicio de chofer y peones en caso que prefieras
                realizar una mudanza tradicional.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full my-4 md:my-0  md:flex-1">
            <Image
              className="w-full max-w-2xl max-h-[200px] md:max-h-[400px] object-cover rounded-[20px]  "
              alt="about image"
              src="/assets/images/about-desktop.png"
              width={620}
              height={475}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
