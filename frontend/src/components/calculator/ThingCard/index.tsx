import Image from 'next/image';
import { MoveToTruck } from './MoveToTruck';
import { useSelector } from 'react-redux';
import { selectTruckItemsById } from '@/features/truck/truckSlice';

type ThingProps = {
  thing: {
    title: string;
    image: string;
    volume: number;
  };
};
export const ThingCard = ({ thing }: ThingProps) => {
  const selectedItem = useSelector((state) =>
    selectTruckItemsById(state, thing.title)
  );
  return (
    <article
      className={`relative grid lg:grid-rows-[3fr,1fr,2fr] lg:h-[170px]  justify-items-center rounded-xl transition-all duration-700 ease-in-out  hover:scale-105 text-white `}
    >
      <div
        className={`bg-white flex items-center justify-center w-16 lg:w-24 h-16 md:w-20 md:h-20 lg:h-24 rounded-lg  `}
      >
        <Image
          src={thing.image}
          alt={thing.title}
          className={`transitions-theme hover:-rotate-12 object-contain`}
          width={100}
          height={100}
        />
      </div>
      <div className="self-start mt-1">
        <MoveToTruck thing={thing} />
      </div>
      <div className="self-start">
        <h2 className=" flex justify-center items-center w-full text-xs md:text-base font-medium  text-center">
          {thing.title}
        </h2>
      </div>
    </article>
  );
};
