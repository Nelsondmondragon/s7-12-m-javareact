'use client';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import vehicles from '../../cars.json';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function Booking() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [startTime, setstartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [category, setCategory] = useState("pick");
    const [startPl, setStartPl] = useState("Buenos Aires");
    const [returnPl, setReturnPl] = useState("Buenos Aires");

  
    const router = useRouter();

    registerLocale('es', es);

    const categories = [
        {
            id: 1,
            name: 'pick',
            img: 'https://picsum.photos/200',
            desc: 'Ideal para cargas pequeñas',
        },
        {
            id: 2,
            name: 'van',
            img: 'https://picsum.photos/200',
            desc: 'Ideal mudanzas chicas. Ej departamento 1 ambiente o 2',
        },
        {
            id: 3,
            name: 'camion',
            img: 'https://picsum.photos/200',
            desc: 'Grandes mudanzas.Ej departamento 3 ambientes',
        },
    ];

    const onCategory = (cat) => {
        setCategory(cat.name);
        //console.log(cat.name);
    };

    const onSearch = () => {
        const selection = {
            startPlace: startPl,
            startDate: startDate,
            startTime: startTime,
            returnPlace: returnPl,
            endDate: endDate,
            endtTime: endTime,
            category: category,
        };

        // console.log(selection);
        router.push(`/booking/${category}`)
        // const result = vehicles.filter(vh => vh.categoria === category)
        // // dispatch(setCategory(result))
        // console.log(result);
    };


    return (
        <section className="min-h-screen flex flex-col">
            <h2 className="text-3xl"> RESERVAS </h2>
            <h3>Consulta disponibilidad y reserva en línea al instante</h3>
            <div className=" mx-auto mt-3">
                <div className="flex mb-1 gap-2 justify-center">
                    <select
                        type="text"
                        defaultValue={'default'}
                        placeholder="Lugar de retiro"
                        onChange={(e) => setStartPl(e.target.value)}
                    >
                        
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Entre Ríos">Entre Ríos</option>
                        <option value="Santa Fé">Santa Fé</option>
                    </select>
                    {/* <input className="border shadow-lg" type="text" placeholder="Lugar" onChange={e => setStartPl(e.target.value)} /> */}
                    <DatePicker
                        className=" bg-blue-700 text-white text-center rounded-md w-40"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        locale="es"
                        dateFormat="d MMMM, yyyy"
                    />
                    <DatePicker
                        className=" bg-blue-700 text-white text-center rounded-md w-40"
                        selected={startTime}
                        onChange={(date) => setstartTime(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Hora"
                        dateFormat="h:mm aa"
                    />
                </div>
                <div className="flex">
                    <input type="checkbox" />
                    <p>Retiro y devuelvo en el mismo lugar</p>
                </div>
                <div className="flex gap-2">
                    <select
                        type="text"
                        defaultValue={'default'}
                        placeholder="Lugar de entrega"
                        onChange={(e) => setReturnPl(e.target.value)}
                    >
                        
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Entre Ríos">Entre Ríos</option>
                        <option value="Santa Fé">Santa Fé</option>
                    </select>
                    {/* <input className="border shadow-lg" type="text" placeholder="Lugar" onChange={e=>setReturnPl(e.target.value)}/> */}
                    <DatePicker
                        className=" bg-blue-700 text-white text-center rounded-md w-40"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        locale="es"
                        dateFormat="d MMMM, yyyy"
                    />
                    <DatePicker
                        className=" bg-blue-700 text-white text-center rounded-md w-40"
                        selected={endTime}
                        onChange={(date) => setEndTime(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Hora"
                        dateFormat="h:mm aa"
                        locale="es"
                    />
                </div>
                <div>
                    <p>Elige un tipo de vehículo, según tu necesidad</p>
                    <div className="flex">
                        {categories.map((cat) => (
                            <div
                                key={cat.id}
                                className={`relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 hover:border-blue-700 ${
                                    category === cat.name && 'border-red-700'
                                }`}
                                onClick={() => onCategory(cat)}
                            >
                                <div className="flex flex-col w-36 gap-2 ">
                                    <img src={cat.img} alt="" />
                                    <h3>{cat.name}</h3>
                                    <p>{cat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p>¿Necesitas contratar un peón de ayuda?</p>
                    <div className="flex">
                        <p>Si</p>
                        <input type="radio" name="helper" value="Yes" />
                    </div>
                    <div className="flex">
                        <p>No</p>
                        <input type="radio" name="helper" value="No" defaultChecked/>
                    </div>
                    <p>¿Necesitas contratar un chofer?</p>
                    <div className="flex">
                        <p>Si</p>
                        <input type="radio" name="driver" value="Yes" />
                    </div>
                    <div className="flex">
                        <p>No</p>
                        <input type="radio" name="driver" value="No" defaultChecked/>
                    </div>
                    <button onClick={onSearch} className=" bg-slate-400 rounded-md px-2">
                        Busqueda
                    </button>
                </div>
            </div>
        </section>
    );

}
