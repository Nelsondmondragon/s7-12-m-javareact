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

export const CardTruck = ({ image, title, line1, line2, line3 }: TruckType) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const onCheckAvailability = (title: string) => {
    const typeVehicle =
      title === 'CAMIÓN CHICO'
        ? 'small'
        : title === 'CAMIÓN MEDIANO'
        ? 'medium'
        : 'large';
    dispatch(setCategory(typeVehicle));
    localStorage.setItem('category', JSON.stringify(typeVehicle));

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
      <div className="md:grid md:grid-cols-2 lg:grid-cols-1 md:gap-4 lg:gap-0">
        <Image
          className="w-full  rounded-t-[20px] md:rounded-[20px] lg:rounded-b-none"
          src={image}
          width={400}
          height={45}
          alt={title}
        />
        <div className=" min-h-[72px] lg:h-64 bg-primary-600 md:bg-primary-700 md:rounded-[20px] lg:rounded-t-none px-0 md:px-4 lg:px-6 pb-4 md:pb-0 pt-4 rounded-b-[20px] grid">
          <h3 className="text-center text-sm sm:text-base md:text-xl font-bold md:pb-2  md:border-b-4 md:border-b-white">
            {title}
          </h3>
          <div className="hidden md:block text-sm py-4">
            <p>{line1}</p>
            <p>{line2}</p>
            <p>{line3}</p>
          </div>
          <div className="hidden md:flex justify-end text-base">
            <button
              className="btn mb-6 w-max px-4"
              onClick={() => onCheckAvailability(title)}
            >
              <p className="flex space-x-2 font-semibold">
                <span>Ver</span>
                <span className="hidden md:flex "> Disponibilidad</span>
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

type Props = {};
export const TypesVehicle = (props: Props) => {
  return (
    <section className="p-4 md:px-12 lg:px-20">
      <div className="hidden md:block">
        <h2 className="text-2xl lg:text-3xl text-white my-12 font-semibold ">
          Selecciona el vehículo que necesitas para tu mudanza
        </h2>
      </div>
      <div className="md:hidden">
        <h2 className="text-lg text-white my-6 font-semibold ">
          ¿Qué vehículo necesitas?
        </h2>
      </div>
      <div className="relative grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4 text-lg text-white">
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
