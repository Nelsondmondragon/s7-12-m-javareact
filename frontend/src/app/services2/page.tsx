import Image from 'next/image';
import persMudanza from '../../../public/assets/images/persMudanza.png';

export default function Services() {
  return (
    <section className="min-h-screen flex flex-col  items-center bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-center">
      <h2 className="text-3xl text-[#FFFEFE] pt-10 pb-10">
        {' '}
        ¡Nuestros servicios!
      </h2>
      <div className="flex justify-evenly">
        <div>
          <Image
            src={persMudanza}
            alt="Personal de mudanza"
            className="w-80 rounded-lg border-[#6EC8FC] border-solid border-2"
          ></Image>
        </div>
        <div className="w-80 bg-[#FFFFFF] py-7 px-7 text-sm text-justify text-[#024369] font-black ml-10 rounded-lg">
          <p>
            Si preferís mudarte de la forma tradicional, contrata el servicio
            integral. Todos nuestro personal es altamente calificado. <br />{' '}
            <br />
            Cuando realices tu reserva, podrás optar por la opción de contratar
            peones ayudantes y/o chofer. <br /> <br />
            No tendrás que preocuparte por seguros ni autorizaciones, nuestro
            servicio integral comprende cobertura en Argetina que brindará
            tranquilidad al personal y a vos a la hora de mudarte.
          </p>
        </div>
      </div>
    </section>
  );
}
