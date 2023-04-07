'use client';
import { setCategory } from '@/features/users/userSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

type TruckType = {
  image: string;
  title: string;
  line1: string;
  line2: string;
  line3: string;
};

const CardTruck = ({ image, title, line1, line2, line3 }: TruckType) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const onCheckAvailability = (title) => {
    dispatch(setCategory(title));
    router.push('/booking');
  };

  return (
    <div className="relative w-full ">
      <div
        className="absolute top-0 left-0 md:hidden cursor-pointer w-full h-full"
        onClick={() => {
          onCheckAvailability(title);
        }}
      ></div>

      <Image
        className="w-full  rounded-t-[20px] "
        src={image}
        width={400}
        height={45}
        alt={title}
      />
      <div className=" bg-primary-600 px-8 pb-4 md:pb-0 pt-4 rounded-b-[20px]">
        <h3 className="text-center text-base md:text-2xl font-bold md:pb-2 md:border-b-4 md:border-b-white">
          {title}
        </h3>
        <div className="hidden md:block text-sm py-4">
          <p>{line1}</p>
          <p>{line2}</p>
          <p>{line3}</p>
        </div>
        <div className="hidden md:flex justify-end">
          <button
            className="btn mb-8"
            onClick={() => onCheckAvailability(title)}
          >
            Ver Disponibilidad
          </button>
        </div>
      </div>
    </div>
  );
};

type Props = {};
export const TypesVehicle = (props: Props) => {
  return (
    <section className="p-4 md:px-32">
      <div className="hidden md:block">
        <h2 className="text-4xl text-white my-12 font-semibold ">
          Selecciona el vehículo que necesitas para tu mudanza
        </h2>
      </div>
      <div className="md:hidden">
        <h2 className="text-lg text-white my-6 font-semibold ">
          ¿Qué vehículo necesitas?
        </h2>
      </div>
      <div className="relative grid grid-cols-3 gap-4 text-lg text-white">
        <CardTruck
          image="/assets/images/camion1.png"
          title="CAMIÓN CHICO"
          line1="20 m3"
          line2="3 Cargadores"
          line3="Departamento y/o casa de 4 personas"
        />
        <CardTruck
          image="/assets/images/camion2.png"
          title="CAMIÓN MEDIANO"
          line1="50 m3"
          line2="4 Cargadores"
          line3="Departamento y/o casa de 5 personas"
        />
        <CardTruck
          image="/assets/images/camion3.png"
          title="CAMIÓN GRANDE"
          line1="80 m3"
          line2="5 Cargadores"
          line3="Departamento y/o casa de 6 personas y objetos extras"
        />
      </div>
    </section>
  );
};
