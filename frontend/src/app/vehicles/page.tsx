'use client';

import getAllCars from '@/lib/getAllCars';
import Image from 'next/image';
//import cars from '../../cars.json';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setCategory as setCat } from '@/features/users/userSlice';

const Vehicles = () => {
    const [category, setCategory] = useState('small');
    const [cars, setCars] = useState([]);
    const router = useRouter();
    const dispatch = useDispatch();
    //const filter = cars.filter((vh) => vh.categoria === category);

    useEffect(() =>  {
        // let query = await getAllCars();
        // console.log(query);
        // setCars(query);
        getAllCars().then((res)=> setCars(res))
        
    }, []);

    // const getCars = async () => {
    //     let query = await getAllCars();
    //     console.log(query)
    //     setCars(query)
    // };

    const handleBooking = () => {
        dispatch(setCat(category));
        localStorage.setItem('category', JSON.stringify(category));
        router.push('/booking');
    };
    //onClick={getCars}
    //getCars();
    return (
        <div className="min-h-screen flex flex-col items-center bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-center">
            <div className="mt-14 flex flex-col items-center">
                {/* <div onClick={getCars}>PRUEBA</div>  */}
                <select
                    defaultValue={'Vehículos pequeños'}
                    className="h-[46px] text-[18px] md:text-[23px] px-2 rounded-md border-gray-400 shadow-md text-center"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="small">Vehículos pequeños</option>
                    <option value="medium">Vehículos medianos</option>
                    <option value="large">Vehículos grandes</option>
                </select>
                <p className="text-[18px] md:text-[23px] text-[#FAFAFA] mt-5">
                    Seleccione el tamaño del vehículo
                </p>
            </div>
            <div className="w-[92%] sm:w-[90%] h-fit my-10 py-[2%] bg-white/80 rounded-3xl flex flex-col items-center gap-8">
                {cars.map((car) => {
                    return (
                        <div key={car.id} className="w-[96%] flex gap-2">
                            
                            <Image
                                src="http://res.cloudinary.com/dqkkehztd/image/upload/v1681589620/images/iifwiad6yjiwqkmvvzsj.jpg"
                                alt={car.make}
                                width={200}
                                height={200}
                                className="rounded-3xl object-contain"
                            />
                            {console.log(car)}
                            <div className="flex flex-col justify-around w-full">
                                <h3 className="text-lg md:text-[29px] font-semibold">{car.make}</h3>
                                <p className="leading-5 md:leading-7 md:text-[23px] md:mt-4">
                                    `$Con capacidad{car.info}`
                                </p>
                                <div className="flex justify-between items-end w-full">
                                    <p className="md:text-[29px] font-semibold">$ {car.price}</p>
                                    <button
                                        onClick={handleBooking}
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
