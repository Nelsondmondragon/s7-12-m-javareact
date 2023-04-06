import Image from 'next/image';
import cars from '../../../cars.json';

const BookingCar = ({ params }) => {
    const result = cars.filter((vh) => vh.categoria === params.id);

    return (
        <div className="h-screen flex justify-center">
            <div className="w-full h-fit mx-10 my-10 p-10 bg-white/80 rounded-3xl flex flex-col items-center gap-8">
                {result.map((car) => {
                    return (
                        <div key={car.id} className="w-11/12 flex">
                            <Image
                                src={`/assets/images/booking/vh-${car.categoria}.jpg`}
                                alt={car.title}
                                width={200}
                                height={200}
                                className="rounded-3xl"
                            />
                            <div className='flex flex-col w-5/12 justify-around ml-14'>
                                <h3 className='text-3xl font-medium'>{car.title}</h3>
                                <p className='text-2xl leading-7'>{car.info}</p>
                                <p className='text-3xl font-medium'>$ {car.price}</p>
                            </div>
                            <button className='bg-primary-600 self-end w-[288px] h-[59px] rounded-xl text-white text-2xl'>Reservar</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BookingCar;
