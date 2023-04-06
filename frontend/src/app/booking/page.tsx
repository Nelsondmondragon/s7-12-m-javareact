"use client";
import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import vehicles from "../../cars.json";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { CustomButton } from "@/components/common/CustomButton";
import { SelectForm } from "@/components/ui/SelectForm";

export default function Booking() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setstartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [category, setCategory] = useState("pick");
  const [startPl, setStartPl] = useState("Buenos Aires");
  const [returnPl, setReturnPl] = useState("Buenos Aires");

  const router = useRouter();

  registerLocale("es", es);

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

    console.log(selection);
    router.push(`/booking/pick`);
    // const result = vehicles.filter(vh => vh.categoria === category)
    // // dispatch(setCategory(result))
    // console.log(result);
  };

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="text-[23px] bg-white w-[182px] h-[45px] text-left pl-2 rounded-md border-gray-400 shadow-md"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));

  return (
    <section className="min-h-screen flex flex-col items-center">
      <div className="flex flex-col gap-1 w-[70%]">
        <h3 className="text-[33px] text-white mt-14">
          Consulta disponibilidad y reserva al instante
        </h3>
        <div className="h-[60vh] rounded-[20px] bg-form backdrop-blur-[8px] px-10 py-5">
          <p className="text-[29px]">Lugar de retiro</p>
          <div className="flex justify-between">
            <div className="w-[450px]">
              <select
                defaultValue={"default"}
                className="w-full h-[46px] text-[23px] px-2 rounded-md border-gray-400 shadow-md"
                //   onChange={(e) => setStartPl(e.target.value)}
              >
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Entre Ríos">Entre Ríos</option>
                <option value="Santa Fé">Santa Fé</option>
              </select>
            </div>
            <DatePicker
              wrapperClassName="w-[200px]"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              locale="es"
              customInput={<ExampleCustomInput />}
              dateFormat="dd/MM/yyyy"
            />

            <DatePicker
              wrapperClassName="w-[200px]"
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

          <div className="flex gap-4 pl-4 mt-4">
            <input type="checkbox" />
            <p className="text-[23px] ">Retiro y devuelvo en el mismo lugar</p>
          </div>
          <p className="text-[29px]">Lugar de Entrega</p>
          <div className="flex justify-between">
            <div className="w-[450px]">
              <select
                defaultValue={"default"}
                className="w-full h-[46px] text-[23px] px-2 rounded-md border-gray-400 shadow-md"
                //   onChange={(e) => setStartPl(e.target.value)}
              >
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Entre Ríos">Entre Ríos</option>
                <option value="Santa Fé">Santa Fé</option>
              </select>
            </div>
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
          <div className="pt-10">
            <div className="mb-2">
              <p className=" text-[23px] mb-3">
                ¿Necesitas contratar un peón de ayuda?
              </p>
              <div className="pl-3">
                <div className="flex gap-4">
                  <p className=" text-[23px] w-[30px]">Si</p>
                  <input type="radio" name="helper" value="Yes" />
                </div>
                <div className="flex gap-4">
                  <p className=" text-[23px] w-[30px]">No</p>
                  <input type="radio" name="helper" value="No" defaultChecked />
                </div>
              </div>
            </div>
            <p className=" text-[23px] mb-3">¿Necesitas contratar un chofer?</p>
            <div className="pl-3">
              <div className="flex gap-4">
                <p className=" text-[23px] w-[30px]">Si</p>
                <input type="radio" name="driver" value="Yes" />
              </div>
              <div className="flex gap-4">
                <p className=" text-[23px] w-[30px]">No</p>
                <input type="radio" name="driver" value="No" defaultChecked />
              </div>
            </div>
          </div>
        </div>
        <button className=" bg-white text-primary-600 text-[23px] font-bold w-[342px] m-auto py-3 rounded-md" onClick={onSearch}>
          Ver Disponibilidad
        </button>
      </div>
    </section>
  );
}
