"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";

export default function Booking() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setstartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [category, setCategory] = useState("");
  registerLocale("es", es);

  const categories = [
    {
      id: 1,
      name: "pick",
      img: "https://picsum.photos/200",
      desc: "Ideal para cargas pequeñas",
    },
    {
      id: 2,
      name: "van",
      img: "https://picsum.photos/200",
      desc: "Ideal mudanzas chicas. Ej departamento 1 ambiente o 2",
    },
    {
      id: 3,
      name: "camion",
      img: "https://picsum.photos/200",
      desc: "Grandes mudanzas.Ej departamento 3 ambientes",
    },
  ];

const onCategory = (cat) => {
  setCategory(cat.id)
  console.log(cat.id);
  
}

const onSearch = () => {

}

  return (
    <section className="min-h-screen flex flex-col">
      <h2 className="text-3xl"> RESERVAS </h2>
      <div className="flex">
        <input className="border shadow-lg" type="text" />
        <DatePicker
          className="border"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          locale="es"
          dateFormat="d MMMM, yyyy"
        />
        <DatePicker
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
        <input className="border shadow-lg" type="text" />
        <DatePicker
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
        <div className="flex">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
              onClick={()=> onCategory(cat) }
            >
              <div className="flex flex-col w-36 gap-2" >
                <img src={cat.img} alt="" />
                <h3>{cat.name}</h3>
                <p>{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={onSearch} className=" bg-slate-400 rounded-md px-2">Busqueda</button>
      </div>
    </section>
  );
}
