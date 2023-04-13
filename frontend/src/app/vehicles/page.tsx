'use client';

import getAllCars from '@/lib/getAllCars';
import Image from 'next/image';
import cars from '../../cars.json';
import { useState } from 'react';

const Vehicles = () => {
    const [category, setCategory] = useState('1');

    const filter = cars.filter((vh) => vh.categoria == category);

    const getCars = async () => {
        let test = await getAllCars();
        console.log(test);
    };
    //onClick={getCars}
    //getCars();
    return (
        <div className="min-h-screen flex flex-col items-center bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-center">
            <div className="mt-14">
                {/* <div onClick={getCars}>PRUEBA</div> */}
                <select
                    defaultValue={'Vehículos pequeños'}
                    className="w-full h-[46px] text-[23px] px-2 rounded-md border-gray-400 shadow-md text-center"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="1">Vehículos pequeños</option>
                    <option value="2">Vehículos medianos</option>
                    <option value="3">Vehículos grandes</option>
                </select>
                <p className="text-[23px] text-[#FAFAFA] mt-5">Seleccione el tamaño del vehículo</p>
            </div>
            <div className="w-[90%] h-fit my-10 p-10 bg-white/80 rounded-3xl flex flex-col items-center gap-8">
                {filter.map((car) => {
                    return (
                        <div key={car.id} className="w-11/12 flex">
                            <Image
                                src={`/assets/images/booking/vh-small.jpg`}
                                alt={car.title}
                                width={200}
                                height={200}
                                className="rounded-3xl  object-contain"
                            />
                            <div className="flex flex-col w-[44%] justify-around ml-14">
                                <h3 className="text-3xl font-medium">{car.title}</h3>
                                <p className="text-2xl leading-7">{car.info}</p>
                                <p className="text-3xl font-medium">$ {car.price}</p>
                            </div>
                            <button className="bg-primary-600 self-end ml-auto w-[288px] h-[59px] rounded-xl text-white text-2xl">
                                Reservar
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Vehicles;
