'use client';
import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/navigation';
import postCarsAvailable from '../../lib/postCarsAvailable';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function Booking() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [startTime, setstartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    // const [category, setCategory] = useState(0);
    const [startPl, setStartPl] = useState('02000010');
    const [returnPl, setReturnPl] = useState('02000010');

    const router = useRouter();

    registerLocale('es', es);

    // let item =
    //   typeof window !== 'undefined' && localStorage.getItem('category')
    //     ? JSON.parse(localStorage.getItem('category')).firstName
    //     : '';
    let item = JSON.parse(localStorage.getItem('category'));
    let section = JSON.parse(localStorage.getItem('vehiclesSection'));
    let user = localStorage.getItem('user');

    const onSearch = async () => {
        let category;
        console.log(item);

        if (item === 'small') {
            category = 1;
        } else if (item === 'medium') {
            category = 2;
        } else {
            category = 3;
        }

        const validateLocation = (loc) => {
            switch (loc) {
                case '02000010':
                    return 'Buenos Aires';
                    break;
                case '14014010':
                    return 'Córdoba';
                    break;
                case '06441030':
                    return 'La Plata';
                    break;
                case '10077020':
                    return 'Rosario';
                    break;
                case '66028050':
                    return 'Salta';
                    break;

                default:
                    break;
            }
        };

        const selection = {
            startPlace: startPl,
            start: startDate.toISOString().split('.')[0],
            returnPlace: returnPl,
            end: endDate.toISOString().split('.')[0],
            id: category,
            location: validateLocation(startPl),
        };

        const postCar = await postCarsAvailable(selection);
        localStorage.setItem('cars', JSON.stringify(postCar));
        localStorage.setItem('bookingDates', JSON.stringify(selection));
        // console.log(postCar);
        console.log(selection);
        if (section === null) {
            router.push(`/booking/${item}`);
        } else if (section !== null && user === null) {
            router.push(`/login`);
        } else {
            router.push(`/pay`);
            //localStorage.removeItem('vehiclesSection');
        }
    };

    // eslint-disable-next-line react/display-name
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button
            className="text-[16px] bg-white w-[147px] h-[36px] text-left pl-2 rounded-md border-gray-400 shadow-md md:h-[46px] md:text-[20px] lg:w-[220px]"
            onClick={onClick}
            ref={ref}
        >
            {value}
        </button>
    ));

    return (
        <section className="min-h-screen flex flex-col items-center bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-center">
            <div className="flex items-center gap-3 bg-[#012337CC] w-full h-[44px] pl-5 lg:hidden">
                <AiOutlineArrowLeft className=" text-white text-[18px] md:text-[22px]" />
                <h3 className="text-[18px] text-white md:text-[22px]">Consulta disponibilidad</h3>
            </div>
            <div className="flex flex-col gap-1 w-[92%] sm:w-[85%] mt-5 xl:w-[70%] 2xl:w-[60%]">
                <h3 className="hidden text-[32px] text-white mt-3 lg:block">Consulta disponibilidad</h3>
                <div className=" rounded-[20px] bg-form backdrop-blur-[8px] px-3 py-5 pb-10 md:px-5 lg:px-10">
                    <p className="text-[15px] mb-1 font-bold md:text-[22px]">Lugar de retiro</p>
                    <div className="flex flex-col md:flex-row md:gap-3 lg:justify-between lg:gap-6">
                        <div className="w-full lg:w-[480px]">
                            <select
                                defaultValue={'default'}
                                className="w-full h-[36px] text-[16px] px-2 rounded-md border-gray-400 shadow-md md:h-[46px] md:text-[20px] md:max-w-sm lg:max-w-lg"
                                onChange={(e) => setStartPl(e.target.value)}
                            >
                                <option value="02000010">Buenos Aires</option>
                                <option value="14014010">Córdoba</option>
                                <option value="06441030">La Plata</option>
                                <option value="10077020">Rosario</option>
                                <option value="66028050">Salta</option>
                            </select>
                        </div>
                        <div className="flex justify-between mt-4 md:mt-0 md:gap-3 lg:gap-6">
                            <div>
                                <p className="text-[15px] mb-1 font-bold md:hidden">Fecha</p>
                                <DatePicker
                                    wrapperClassName="w-[148px]"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    locale="es"
                                    customInput={<ExampleCustomInput />}
                                    dateFormat="dd/MM/yyyy"
                                />
                            </div>
                            <div>
                                <p className="text-[15px] mb-1 font-bold md:hidden">Hora</p>
                                <DatePicker
                                    wrapperClassName="w-[148px]"
                                    selected={startTime}
                                    onChange={(date) => setstartTime(date)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Hora"
                                    dateFormat="h:mm aa"
                                    customInput={<ExampleCustomInput />}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 pl-4 mt-4 mb-5">
                        <input type="checkbox" />
                        <p className="text-[16px] md:text-[20px] ">
                            Retiro y devuelvo en el mismo lugar
                        </p>
                    </div>
                    <p className="text-[15px] mb-1 font-bold md:text-[22px]">Lugar de Entrega</p>
                    <div className="flex flex-col md:flex-row md:gap-3 lg:justify-between lg:gap-6">
                        <div className="w-full lg:w-[480px]">
                            <select
                                defaultValue={'default'}
                                className="w-full h-[36px] text-[16px] px-2 rounded-md border-gray-400 shadow-md md:h-[46px] md:text-[20px] md:max-w-sm lg:max-w-lg"
                                onChange={(e) => setReturnPl(e.target.value)}
                            >
                                <option value="02000010">Buenos Aires</option>
                                <option value="14014010">Córdoba</option>
                                <option value="06441030">La Plata</option>
                                <option value="10077020">Rosario</option>
                                <option value="66028050">Salta</option>
                            </select>
                        </div>
                        <div className="flex justify-between mt-4 md:mt-0 md:gap-3 lg:gap-6">
                            <div className="">
                                <p className="text-[15px] mb-1 font-bold md:hidden">Fecha</p>
                                <DatePicker
                                    wrapperClassName="w-[200px]"
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                    locale="es"
                                    customInput={<ExampleCustomInput />}
                                    dateFormat="dd/MM/yyyy"
                                />
                            </div>

                            <div>
                                <p className="text-[15px] mb-1 font-bold md:hidden">Hora</p>
                                <DatePicker
                                    wrapperClassName="w-[200px]"
                                    selected={endTime}
                                    onChange={(date) => setEndTime(date)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Hora"
                                    dateFormat="h:mm aa"
                                    customInput={<ExampleCustomInput />}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pt-5">
                        <div className="mb-2">
                            <p className=" text-[16px] mb-3 md:text-[20px]">
                                ¿Necesitas contratar un peón de ayuda?
                            </p>
                            <div className="pl-3">
                                <div className="flex gap-4">
                                    <p className=" text-[16px] w-[30px] md:text-[20px]">Si</p>
                                    <input type="radio" name="helper" value="Yes" />
                                </div>
                                <div className="flex gap-4">
                                    <p className=" text-[16px] w-[30px] md:text-[20px]">No</p>
                                    <input type="radio" name="helper" value="No" defaultChecked />
                                </div>
                            </div>
                        </div>
                        <p className=" text-[16px] mb-3 md:text-[20px]">
                            ¿Necesitas contratar un chofer?
                        </p>
                        <div className="pl-3">
                            <div className="flex gap-4">
                                <p className=" text-[16px] w-[30px] md:text-[20px]">Si</p>
                                <input type="radio" name="driver" value="Yes" />
                            </div>
                            <div className="flex gap-4">
                                <p className=" text-[16px] w-[30px] md:text-[20px]">No</p>
                                <input type="radio" name="driver" value="No" defaultChecked />
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className=" bg-white text-primary-600 text-[16px] font-bold w-[167px] m-auto py-3 rounded-md mt-4 mb-5 md:w-[180px]"
                    onClick={onSearch}
                >
                    Ver Disponibilidad
                </button>
            </div>
        </section>
    );
}
