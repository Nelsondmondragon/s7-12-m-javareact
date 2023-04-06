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
      className={`relative grid bg-neutral-100 items-center justify-items-center rounded-xl py-1 px-1 transition-all duration-700 ease-in-out  hover:scale-105 border-2 border-primary `}
    >
      <div className={`flex items-center justify-center`}>
        <Image
          src={thing.image}
          alt={thing.title}
          className={`transitions-theme hover:-rotate-12 object-contain`}
          width={80}
          height={80}
        />
      </div>
      <div className={`grid items-center justify-items-center text-darkBlue `}>
        <h2 className="text-[10px]">{thing.title}</h2>
        {/* <div className=" flex items-center justify-between w-28 my-2 text-[10px]">
          <span className="font-semibold mr-2">Volumen:</span>
          <p className="flex items-center px-1">{thing.volume}</p>
        </div> */}
        <MoveToTruck thing={thing} />
      </div>
    </article>
  );
};
