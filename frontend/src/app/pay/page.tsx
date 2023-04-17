"use client";
import ModalConfirm from "@/components/ui/ModalConfirm";
import ModalLoading from "@/components/ui/ModalLoading";
import React from "react";
import { useState } from "react";

const PayPage = () => {
  const [modal, setModal] = useState("");
  const car = JSON.parse(localStorage.getItem('carSelected'))

  const timer = async () => {
    setModal("loading");
    setTimeout(() => {
      setModal("confirm");
    }, 3000);
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col py-5 w-[90%] gap-5 md:gap-8 lg:py-10">
        <div className=" rounded-[20px] bg-form backdrop-blur-[8px] px-4 py-4  md:px-5 lg:px-12 lg:py-8 ">
          <p className="text-[12px] font-bold mb-4 md:text-[18px] lg:text-[37px]">
            Para confirmar la reserva ingresa los datos de tu tarjeta.
          </p>

          <p className="text-[12px] font-bold md:text-[18px] md:font-normal lg:text-[29px]">
            Atención: Esta tarjeta será utilizada solo a fin de asegurar y
            confirmar la reserva. 
          </p>
          <p className="text-[12px] font-bold md:text-[18px] md:font-normal lg:text-[29px]">El pago lo realizarás al momento de retirar el
            vehículo.</p>
        </div>
        <section className=" flex flex-col lg:flex-row justify-evenly items-center gap-5 md:gap-8">
          {/* card */}
          <div className=" text-white w-[90%] sm:w-auto lg:w-[393px] rounded-t-lg">
            <div>
              <img
                className="  object-cover rounded-t-lg sm:max-w-lg lg:w-[393px]"
                src={car.imageResource?.urlSecure}
                alt=""
              />
            </div>
            <div className=" bg-primary-700 pt-5 rounded-b-lg sm:max-w-lg">
              <p className=" text-center text-[18px] md:text-[29px]">Vehículo {car.category.name}</p>
              <hr className="w-[90%] m-auto" />
              <div className="py-5 px-10 text-[16px] md:text-[23px]">
                <li>Modelo: {car.model} {car.make}</li>
                <li>Capacidad de carga: {car.category.capacityLimit} Kg</li>
                <li>Costo por hora: ${car.category.hourlyPrice}</li>
              </div>
              <p className="ml-5 text-[18px] pb-5 md:text-[29px]">TOTAL IVA incl: ${car.category.hourlyPrice * 2}</p>
            </div>
          </div>
          {/* form pay */}
          <div className=" bg-form rounded-2xl text-[15px] md:text-[22px] px-8 md:px-14 md:py-10 py-3 md:w-[90%] lg:max-w-[616px]">
            <div className="mb-4">
              <p className=" shadow-md font-bold">N° Tarjeta</p>
              <input
                className="w-full rounded-md h-[29px] md:h-[50px] border border-primary-400 px-2"
                type="text"
                placeholder="placeholder"
              />
              <p className=" text-[#575757] italic ">
                Ingrese los 16 números de su tarjeta
              </p>
            </div>
            <div className="mb-4">
              <p className=" font-bold">Nombre y apellido</p>
              <input
                className="w-full rounded-md h-[29px] md:h-[50px] border border-primary-400 px-2"
                type="text"
                placeholder="placeholder"
              />
              <p className="text-[#575757] italic">
                Ingrese los datos tal como figuran en la tarjeta
              </p>
            </div>
            <div className="flex gap-3">
              <div>
                <p className="font-bold ">Vencimiento</p>
                <input
                  className="w-full rounded-md h-[29px] md:h-[50px] border border-primary-400 px-2"
                  type="text"
                  placeholder="placeholder"
                />
                <p className="text-[#575757] italic">MM/AA</p>
              </div>
              <div>
                <p className=" font-bold">CVV</p>
                <input
                  className="w-full rounded-md h-[29px] md:h-[50px] border border-primary-400 px-2"
                  type="text"
                  placeholder="placeholder"
                />
                <p className="text-[#575757] italic">Código de 3 dígitos</p>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-white text-primary-600 text-[16px] md:text-[20px] font-bold w-[167px] md:w-[282px] py-3 rounded-md mt-10 shadow-lg"
                onClick={timer}
              >
                Reservar
              </button>
            </div>
          </div>
          {modal === "loading" && <ModalLoading />}
          {modal === "confirm" && <ModalConfirm />}
        </section>
      </div>
    </div>
  );
};

export default PayPage;
