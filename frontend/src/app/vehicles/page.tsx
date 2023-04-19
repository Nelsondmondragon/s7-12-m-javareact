'use client';

import getAllCars from '@/lib/getAllCars';
import Image from 'next/image';
//import cars from '../../cars.json';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setCategory as setCat } from '@/features/users/userSlice';

const Vehicles = () => {
    const [category, setCategory] = useState('1');
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
    //const filter = cars.filter((vh) => vh.categoria === category);

    useEffect(() => {
        getAllCars().then((res) => {
            setCars(res);
            const filterRes = res.filter((vh) => vh.category.id == category);
            setFilteredCars(filterRes);
        });
    }, []);

    const filterCars = (cat) => {
        setCategory(cat);
        const filter = cars.filter((vh) => vh.category.id == cat);
        setFilteredCars(filter);
    };

    const handleBooking = (id) => {
        let newCategory;

        if (category == 1) {
            newCategory = 'small';
        } else if (category == 2) {
            newCategory = "medium";
        } else {
            newCategory = "large";
        }
        dispatch(setCat(newCategory));
        localStorage.setItem('category', JSON.stringify(newCategory));
        localStorage.setItem('carSelected', JSON.stringify(cars.find((car) => car.id === id)));
        localStorage.setItem('vehiclesSection', JSON.stringify('true'));
        router.push('/booking');
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-center">
            <div className="mt-14 flex flex-col items-center">
                <select
                    defaultValue={'Vehículos pequeños'}
                    className="h-[46px] text-[18px] md:text-[23px] px-2 rounded-md border-gray-400 shadow-md text-center"
                    onChange={(cat) => filterCars(cat.target.value)}
                >
                    <option value="1">Vehículos pequeños</option>
                    <option value="2">Vehículos medianos</option>
                    <option value="3">Vehículos grandes</option>
                </select>
                <p className="text-[18px] md:text-[23px] text-[#FAFAFA] mt-5">
                    Seleccione el tamaño del vehículo
                </p>
            </div>
            <div className="w-[92%] sm:w-[90%] h-fit my-10 py-[2%] bg-white/80 rounded-3xl flex flex-col items-center gap-8">
                {filteredCars &&
                    filteredCars.map((car) => {
                        return (
                            <div key={car.id} className="w-[96%] flex gap-2">
                                <Image
                                    src={car.imageResource?.urlSecure}
                                    alt={car.make}
                                    width={130}
                                    height={130}
                                    className="rounded-3xl object-contain md:w-[200px]"
                                />
                                <div className="flex flex-col justify-around w-full">
                                    <h3 className="text-lg md:text-[29px] font-semibold">{car.make}</h3>
                                    <p className="leading-5 md:leading-7 md:text-[23px] md:mt-4">
                                        Vehículo de tamaño {car.category.name}, con medidas de{' '}
                                        {car.length / 100} x {car.width / 100} x {car.height / 100}.{' '}
                                        <span className="hidden sm:block">
                                            Perfecto para mudanzas cortas y rápidas
                                        </span>
                                    </p>
                                    <div className="flex justify-between items-end w-full">
                                        <p className="md:text-[29px] font-semibold">
                                            $ {car.category.hourlyPrice}
                                        </p>
                                        <button
                                            onClick={() => handleBooking(car.id)}
                                            className="bg-primary-600  w-[78px] md:w-[288px] h-[27px] md:h-[59px] rounded-[5px] md:rounded-[10px] text-white md:text-2xl"
                                        >
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
