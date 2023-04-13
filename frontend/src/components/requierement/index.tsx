import Image from 'next/image';

type RequirementType = {
  image: string;
  title: string;
  description: string;
};
const CardRequirement = ({ image, title, description }: RequirementType) => {
  return (
    <div className="w-full h-full">
      <Image
        className="w-full object-cover object-center rounded-t-2xl "
        src={image}
        width={300}
        height={300}
        alt={title}
      />
      <div className=" bg-primary-600 px-4 md:px-6 lg:px-4 pt-4 min-h-[150px] rounded-b-2xl text-white">
        <h3 className="text-base md:text-xl lg:text-base xl:text-xl font-semibold text-center mb-2">
          {title}
        </h3>
        <div className="text-sm pb-8">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

type Props = {};

export const Requirement = (props: Props) => {
  return (
    <section className="px-4 md:px-12 lg:px-20 pb-24">
      <h2 className="md:text-2xl lg:text-3xl text-white my-12 font-semibold ">
        ¿Qué necesitas para alquilar un vehículo con nosotros?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-2 xl:gap-4 text-lg">
        <CardRequirement
          image="/assets/images/licencia.png"
          title="LICENCIA DE CONDUCIR"
          description="La misma tiene que estar vigente. Puede ser Argentina, Internacional, del país de origen."
        />
        <CardRequirement
          image="/assets/images/tarjeta.png"
          title="TARJETA DE CRÉDITO"
          description="Puede ser propia o de un tercero. Recuerde debe estar presente cuando se firma el contrato."
        />
        <CardRequirement
          image="/assets/images/dni.png"
          title="DNI Y/O PASAPORTE"
          description="Deberá presentar DNI o Pasaporte para acreditar su identidad al momento de firmar el contrato."
        />
        <CardRequirement
          image="/assets/images/edad.png"
          title="EDAD MINIMA"
          description="Ser mayor de veintiún años de edad, es requisito indispensable para alquilar un auto. Sin excepción."
        />
      </div>
    </section>
  );
};
