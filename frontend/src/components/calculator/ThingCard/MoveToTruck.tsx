'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setAddItemToTruck,
  selectTruckItemsById,
  setRemoveItemFromTruck,
} from '../../../features/truck/truckSlice';

export const MoveToTruck = ({ thing }) => {
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
    dispatch(setRemoveItemFromTruck(item));
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
      <button
        type="button"
        disabled={processing | (selectedItem.length === 0)}
        className=" flex  px-2 py-1 bg-primary-600 rounded   shadow shadow-sky-200 disabled:opacity-50 text-xs "
        onClick={() => {
          onRestToCart();
        }}
      >
        -
      </button>
      <p className="text-red-500"> {selectedItem[0]?.qty}</p>
      <button
        type="button"
        disabled={processing}
        className=" flex  px-2 py-1 bg-primary-700 rounded   shadow shadow-sky-200 disabled:opacity-50 text-xs "
        onClick={() => {
          onAddToCart();
        }}
      >
        +
      </button>
    </div>
  );
};
