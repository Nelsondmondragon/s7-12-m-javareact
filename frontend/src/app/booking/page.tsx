'use client';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import vehicles from '../../cars.json';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { CustomButton } from '@/components/common/CustomButton';

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
            
            <h3 className=' text-center text-4xl'>Consulta disponibilidad y reserva en línea al instante</h3>
            
        </section>
    );

}
