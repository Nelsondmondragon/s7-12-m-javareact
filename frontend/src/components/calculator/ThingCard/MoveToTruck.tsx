'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setAddItemToTruck,
  selectTruckItemsById,
  setDecreaseItemFromTruck,
} from '../../../features/truck/truckSlice';

export const MoveToTruck = ({ thing, side }) => {
  const dispatch = useDispatch();

  const selectedItem = useSelector((state) =>
    selectTruckItemsById(state, thing.title)
  );
  const [processing, setProcessing] = useState(false);

  const onRestToCart = () => {
    setProcessing(true);
    const item = {
      title: thing.title,
      image: thing.image,
      volume: thing.volume,
      qty: selectedItem[0]?.qty,
    };
    dispatch(setDecreaseItemFromTruck(item));
    setTimeout(() => {
      setProcessing(false);
    }, 100);
  };

  const onAddToCart = () => {
    setProcessing(true);
    const item = {
      title: thing.title,
      image: thing.image,
      volume: thing.volume,
    };
    dispatch(setAddItemToTruck(item));
    setTimeout(() => {
      setProcessing(false);
    }, 100);
  };

  return (
    <div className="flex items-center gap-3 text-white">
      <div
        className="absolute top-0 left-0 md:hidden cursor-pointer bg-opacity-50 w-full h-full"
        onClick={() => {
          onAddToCart();
        }}
      ></div>

      <div className="hidden md:flex items-center gap-3">
        <button
          type="button"
          disabled={processing | (selectedItem.length === 0)}
          className=" flex w-5 justify-center items-center  px-2 py-1 bg-primary-600 rounded   shadow shadow-sky-200 disabled:bg-neutral-400 text-xs "
          onClick={() => {
            onRestToCart();
          }}
        >
          -
        </button>
        <p className="text-red-500 w-4 text-right"> {selectedItem[0]?.qty}</p>
        <button
          type="button"
          disabled={processing}
          className=" flex w-5 justify-center items-center  px-2 py-1 bg-primary-700 rounded   shadow shadow-sky-200 disabled:bg-neutral-400 text-xs "
          onClick={() => {
            onAddToCart();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
