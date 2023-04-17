'use client';
import { TypesVehicle } from '@/components/typeVehicle';
import { Requirement } from '@/components/requierement';
import { useRouter } from 'next/navigation';

import { Hero } from '@/components/Hero';

export default function Home() {
  const router = useRouter();
  
  localStorage.removeItem('vehiclesSection');

  return (
    <main>
      <section>
        <div className="gradient relative z-0">
          <Hero />
          <div className="bg-mobile-pattern md:bg-global-pattern bg-cover bg-no-repeat bg-center w-full h-full absolute top-0 left-0 -z-10"></div>
          <TypesVehicle />
          <div className="hidden md:block">
            <Requirement />
          </div>
          <div className="p-4 text-white md:hidden">
            <h2 className="text-lg  my-6 font-semibold ">
              ¿No sabes que vehículo necesitas?
            </h2>
            <p className="max-w-[280px]">
              Utiliza nuestra calculadora de volumen y no adivines más
            </p>
            <div className="flex justify-center items-center my-8">
              <button
                className="btn px-12 py-2"
                onClick={() => router.push('/calculator')}
              >
                Calcular
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
