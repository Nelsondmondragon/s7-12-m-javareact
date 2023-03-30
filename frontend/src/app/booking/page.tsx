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
  registerLocale("es", es);

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

      </div>
    </section>
  );
}
