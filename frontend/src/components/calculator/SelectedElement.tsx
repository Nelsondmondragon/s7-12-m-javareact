'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegTrashAlt } from 'react-icons/fa';

import {
    selectTruckItems,
    selectTruckVolume,
    setAddItemToTruck,
    setDecreaseItemFromTruck,
    setRemoveItemFromTruck,
} from '../../features/truck/truckSlice';
import getAllCategories from '@/lib/getCategories';

const Counter = ({ thing }) => {
    const [processing, setProcessing] = useState(false);
    const dispatch = useDispatch();

    const onRestToCart = (thing) => {
        setProcessing(true);
        const item = {
            title: thing.title,
            image: thing.image,
            volume: thing.volume,
            qty: thing.qty,
        };
        dispatch(setDecreaseItemFromTruck(item));
        setTimeout(() => {
            setProcessing(false);
        }, 100);
    };

    const onAddToCart = (thing) => {
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
        <div className="flex items-center gap-3">
            <button
                type="button"
                disabled={processing | (thing.qty === 0)}
                className=" flex justify-center items-center w-6 h-6 bg-primary-600 rounded disabled:bg-neutral-400  text-white "
                onClick={() => {
                    onRestToCart(thing);
                }}
            >
                -
            </button>
            <p className="text-black  w-4 text-center"> {thing.qty}</p>
            <button
                type="button"
                disabled={processing}
                className=" flex justify-center items-center w-6 h-6 bg-primary-700 rounded  disabled:bg-neutral-400  text-white "
                onClick={() => {
                    onAddToCart(thing);
                }}
            >
                +
            </button>
        </div>
    );
};

export const SelectedArticles = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const categoryData = await getAllCategories();
            categoryData.sort((x, y) => x.volume - y.volume);
            setCategories(categoryData);
        };
        const data = fetchCategories();
    }, []);

    const selectedItems = useSelector(selectTruckItems);
    const selectedVolume = useSelector(selectTruckVolume);

    let needVehicle: {
        name: string;
        id: number;
        type: string;
    } = { name: '', id: 0, type: '' };

    const calcVolumen = () => {
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].volume > selectedVolume) {
                needVehicle = {
                    name: categories[i].name,
                    id: categories[i].id,
                    type: '',
                };
                break;
            }
        }
        switch (needVehicle.id) {
            case 1:
                needVehicle.type = '1';
                break;
            case 2:
                needVehicle.type = '2';
                break;
            default:
                needVehicle.type = '3';
                break;
        }
        return needVehicle;
    };

    const onRemoveFromTruck = (item) => {
        dispatch(setRemoveItemFromTruck(item));
    };

    return (
        <div className="flex flex-col flex-1 justify-between md:px-4 lg:px-0">
            <article className="relative p-4 md:px-8 rounded-lg bg-neutral-100 flex-1">
                <h2 className="text-lg text-left font-semibold mb-4 ">Tu mudanza:</h2>
                <div className="h-[300px] overflow-auto mb-8 ">
                    {selectedItems.map((item) => {
                        return (
                            <div key={item.title} className="flex items-center space-x-2 ">
                                <Counter thing={item} />
                                <Image src={item.image} alt={item.title} width={40} height={40} />
                                <div className="flex flex-1 justify-between">
                                    <span className=""> {item.title}</span>
                                </div>
                                <span>{(item.qty * item.volume).toFixed(2)}</span>
                                <div className="cursor-pointer text-error-500 hover:text-error-300 ">
                                    <FaRegTrashAlt onClick={() => onRemoveFromTruck(item)} />
                                </div>
                            </div>
                        );
                    })}
                </div>
                {selectedItems.length > 0 && (
                    <p className="absolute bottom-0 left-0 right-0 text-center text-lg">
                        Necesitas un {calcVolumen().name}
                    </p>
                )}
            </article>
            <div className="mt-8 mx-auto">
                <button
                    className="btn"
                    onClick={() => {
                        needVehicle.type !== '' && localStorage.setItem('filter', needVehicle.type);
                        router.push('/vehicles');
                    }}
                >
                    Ver Vehículos
                </button>
            </div>
        </div>
    );
};
