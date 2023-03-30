import Image from 'next/image';

type TruckType = {
  image: string;
  title: string;
  line1: string;
  line2: string;
  line3: string;
};
const CardTruck = ({ image, title, line1, line2, line3 }: TruckType) => {
  return (
    <div className="w-full">
      <Image
        className="w-full"
        src={image}
        width={400}
        height={45}
        alt={title}
      />
      <div className=" bg-myBlue-500 pl-8 pt-4 rounded-b-[20px]">
        <h3>{title}</h3>
        <div className="text-sm pb-8">
          <p>{line1}</p>
          <p>{line2}</p>
          <p>{line3}</p>
        </div>
      </div>
    </div>
  );
};

type Props = {};
export const TypesVehicle = (props: Props) => {
  return (
    <section className="p-4 md:px-32">
      <h2 className="text-xl my-12 font-bold  ">
        ¿QUÉ TIPO DE VEHÍCULO NECESITAS PARA TU MUDANZA?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg text-white">
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
