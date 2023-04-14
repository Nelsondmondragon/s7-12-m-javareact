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
            <div className="mt-14 flex flex-col items-center">
                {/* <div onClick={getCars}>PRUEBA</div> */}
                <select
                    defaultValue={'Vehículos pequeños'}
                    className="h-[46px] text-[18px] md:text-[23px] px-2 rounded-md border-gray-400 shadow-md text-center"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="1">Vehículos pequeños</option>
                    <option value="2">Vehículos medianos</option>
                    <option value="3">Vehículos grandes</option>
                </select>
                <p className="text-[18px] md:text-[23px] text-[#FAFAFA] mt-5">Seleccione el tamaño del vehículo</p>
            </div>
            <div className="w-[92%] sm:w-[90%] h-fit my-10 py-[2%] bg-white/80 rounded-3xl flex flex-col items-center gap-8">
                {filter.map((car) => {
                    return (
                        <div key={car.id} className="w-[96%] flex gap-2">
                            <Image
                                src={`/assets/images/booking/vh-small.jpg`}
                                alt={car.title}
                                width={200}
                                height={200}
                                className="rounded-3xl object-contain"
                            />
                            <div className="flex flex-col justify-around w-full">
                                <h3 className="text-lg md:text-[29px] font-semibold">{car.title}</h3>
                                <p className="leading-5 md:leading-7 md:text-[23px] md:mt-4">{car.info}</p>
                                <div className="flex justify-between items-end w-full">
                                    <p className="md:text-[29px] font-semibold">$ {car.price}</p>
                                    <button className="bg-primary-600  w-[78px] md:w-[288px] h-[27px] md:h-[59px] rounded-[5px] md:rounded-[10px] text-white md:text-2xl">
                                        Reservar
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Vehicles;
