'use client';
import { useSelector } from 'react-redux';

import {
  selectTruckItems,
  selectTruckVolume,
} from '../../features/truck/truckSlice';

import { ThingCard } from './ThingCard';

import { calculatorData } from './calculatorData';
import { SelectedArticles } from './SelectedElement';

type Props = {};

export const MoveThing = (props: Props) => {
  return (
    <section className="px-4 py-8">
      <h1 className="text-center text-3xl text-white mb-8">
        Selecciona los Elementos que vas a mudar
      </h1>

      <div className="grid md:grid-cols-[minmax(120px,_1fr)_300px] gap-2">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,_1fr))] md:grid-cols-[repeat(auto-fill,minmax(120px,_1fr))] gap-1 md:gap-2 p-1 md:p-4">
          {calculatorData.map((article) => {
            return <ThingCard thing={article} key={article.title} />;
          })}
        </div>

        <SelectedArticles />
      </div>
    </section>
  );
};
