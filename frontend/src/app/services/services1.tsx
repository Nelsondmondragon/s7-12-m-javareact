import Image from 'next/image';
import personal from '../../../public/assets/images/services/personal.jpg';
import lecciones from '../../../public/assets/images/services/lecciones.png';

export default function Services1({pasos}) {
  return (
    <section className="min-h-screen flex flex-col  items-center bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-center">
      <h2 className="text-3xl text-[#FFFEFE] pt-10 pb-10">
        {' '}
        ¡Nuestros servicios!
      </h2>
      <div className="flex flex-row w-full justify-center max-sm:flex-col pb-16">
        <div className=" bg-[#FFFFFF] rounded-[10px] w-96 border-[#6EC8FC] border-solid border-2 max-sm:self-center max-sm:w-[22rem]">
          <Image
            src={personal}
            alt="Personal"
            className="w-full h-60 rounded-t-lg border-b-[#6EC8FC] border-b-solid border-b-4"
          />
          <h3 className="text-xl text-[#024369] flex justify-center font-extrabold px-8 pt-2">
            PERSONAL DE MUDANZA
          </h3>
          <p className="mx-5 pt-3 text-[#024369] text-xs border-t-[#024369] border-t-solid border-t-4 tracking-wider">
            Si preferís mudarte de la forma tradicional, contrata el servicio
            integral. Todos nuestro personal es altamente calificado.
          </p>
          <button className="mx-5 mt-2 mb-1 flex justify-center text-[#024369] font-extrabold" onClick={()=>pasos(1)}>
            Ver mas
          </button>
        </div>
        <div className=" bg-[#FFFFFF] rounded-[10px] w-96 border-[#6EC8FC] border-solid border-2 ml-20 max-lg:ml-4 max-md:ml-0 max-sm:mt-12 max-sm:self-center max-sm:w-[22rem]">
          <Image
            src={lecciones}
            alt="Lecciones"
            className="w-full h-60 rounded-t-lg border-b-[#6EC8FC] border-b-solid border-b-4 "
          /> 
          <h3 className="text-xl text-[#024369] flex justify-center font-extrabold px-8 pt-2">
            LECCIONES DE USO DEL VEHÍCULO
          </h3>
          <p className="mx-5 pt-3 text-[#024369] text-xs border-t-[#024369] border-t-solid border-t-4">
            Te damos los mejores tips para realizar una mudanza organizada.
            También podrás calcular de acuerdo al volumen de carga, la mejor
            opción de transporte.
          </p>
          <button className="mx-5 mt-2 mb-1 flex text-end text-[#024369] font-extrabold" onClick={() =>pasos(2)}>
            Ver mas
          </button>
        </div>
      </div>
    </section>
  );
}
