'use client';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegTrashAlt } from 'react-icons/fa';

import {
  selectTruckItems,
  selectTruckVolume,
  setRemoveItemFromTruck,
} from '../../features/truck/truckSlice';
import { MoveToTruck } from './ThingCard/MoveToTruck';

type Props = {};
export const SelectedArticles = (props: Props) => {
  const dispatch = useDispatch();

  const selectedItems = useSelector(selectTruckItems);
  const selectedVolume = useSelector(selectTruckVolume);

  const calcVolumen = () => {
    if (1500 < selectedVolume && selectedVolume < 4000) {
      return 'Camión Mediano';
    }
    if (4000 < selectedVolume) {
      return 'Camión Grande';
    }

    return 'Vehículo Pequeño';
  };

  const onRemoveFromTruck = (item) => {
    dispatch(setRemoveItemFromTruck(item));
  };

  return (
    <div className="flex flex-col flex-1 justify-between">
      <article className="relative p-4 rounded-lg bg-neutral-100 flex-1">
        <h2 className="text-lg text-center font-semibold mb-4 ">
          Seleccionados
        </h2>
        <div className="h-[300px] overflow-auto mb-8 ">
          {selectedItems.map((item) => {
            return (
              <div key={item.title} className="flex items-center space-x-2 ">
                <MoveToTruck thing={item} />
                <Image
                  src={item.image}
                  alt={item.title}
                  width={40}
                  height={40}
                />
                <div className="flex flex-1 justify-between">
                  <span className="text-xs"> {item.title}</span>
                </div>
                <span>{item.qty * item.volume}</span>
                <div className="cursor-pointer text-error-500 hover:text-error-300 ">
                  <FaRegTrashAlt onClick={() => onRemoveFromTruck(item)} />
                </div>
              </div>
            );
          })}
        </div>
        {selectedItems.length > 0 && (
          <p className="absolute bottom-0 left-0 right-0 text-center text-lg">
            Necesitas un {calcVolumen()}
          </p>
        )}
      </article>
      <div className="mt-8 mx-auto">
        <button className="btn" onClick={() => alert('Ver vehículos')}>
          Ver Vehículos
        </button>
      </div>
    </div>
  );
};
