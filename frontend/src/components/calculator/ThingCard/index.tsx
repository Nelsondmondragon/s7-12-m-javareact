import Image from 'next/image';
import { MoveToTruck } from './MoveToTruck';

type ThingProps = {
  thing: {
    title: string;
    image: string;
    volume: number;
  };
};
export const ThingCard = ({ thing }: ThingProps) => {
  return (
    <article
      className={`relative grid bg-neutral-100 items-center justify-items-center rounded-xl py-2 px-2 transition-all duration-700 ease-in-out w-full hover:scale-105 border-4 border-primary`}
    >
      <div className={`flex items-center justify-center`}>
        <Image
          src={thing.image}
          alt={thing.title}
          className={`transitions-theme hover:-rotate-12 object-cover  `}
          width={100}
          height={100}
        />
      </div>
      <div className={`grid items-center justify-items-center text-darkBlue `}>
        <h2 className="text-[10px]">{thing.title}</h2>
        <div className=" flex items-center justify-between w-28 my-2 text-[10px]">
          <span className="font-semibold mr-2">Volumen:</span>
          <p className="flex items-center px-1">{thing.volume}</p>
        </div>
        <MoveToTruck thing={thing} />
      </div>
    </article>
  );
};
