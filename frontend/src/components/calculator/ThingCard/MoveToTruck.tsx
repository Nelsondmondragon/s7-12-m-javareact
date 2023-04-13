'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setAddItemToTruck,
  selectTruckItemsById,
  setDecreaseItemFromTruck,
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
    <div className=" text-white">
      <div
        className="absolute top-0 left-0 lg:hidden cursor-pointer bg-opacity-50 w-full h-full"
        onClick={() => {
          onAddToCart();
        }}
      ></div>

      <div className="hidden lg:flex items-center gap-3 text-black">
        <button
          type="button"
          disabled={processing | (selectedItem.length === 0)}
          className=" flex w-6 h-6 justify-center items-center bg-white rounded"
          onClick={() => {
            onRestToCart();
          }}
        >
          -
        </button>
        <p className="text-white w-4 text-center">
          {!selectedItem[0]?.qty ? 0 : selectedItem[0].qty}
        </p>
        <button
          type="button"
          disabled={processing}
          className=" flex w-6 h-6 justify-center items-center  bg-white rounded"
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
