'use client';
import ModalConfirm from '@/components/ui/ModalConfirm';
import ModalLoading from '@/components/ui/ModalLoading';
import React from 'react';
import { useState } from 'react';

const PayPage = () => {
  const [modal, setModal] = useState('');

  const timer = async () => {
    setModal('loading');
    setTimeout(() => {
      setModal('confirm');
    }, 3000);
  };

  return (
    <section className="h-[80vh] flex justify-evenly items-center">
      {/* card */}
      <div className=" text-white w-[393px] h-[575px] rounded-t-lg">
        <img
          className="h-[364px]  object-cover rounded-t-lg"
          src="https://www.revistaautocrash.com/wp-content/uploads/2018/09/FC9J-Camion-2-e1537912962588.jpg"
          alt=""
        />
        <div className=" bg-primary-700 pt-5 rounded-b-lg">
          <p className=" text-center text-xl">CAMION CHICO</p>
          <hr className="w-[90%] m-auto" />
          <div className="py-5 px-10 text-[18px]">
            <li>Caja automatica</li>
            <li>Capacidad de carga</li>
            <li>costo por día: $48.400</li>
          </div>
          <p className="ml-5 text-[24px] pb-5">TOTAL IVA incl: $48.400</p>
        </div>
      </div>
      {/* form pay */}
      <div className="w-[616px] h-[598px] bg-[#D9D9D9] rounded-2xl text-[24px] px-14 py-5">
        <div className="mb-4">
          <p className=" shadow-md">N° Tarjeta</p>
          <input
            className="w-full rounded-md h-[50px] border border-primary-400 px-2"
            type="text"
            placeholder="placeholder"
          />
          <p className=" text-[#575757] italic">
            Ingrese los 16 números de su tarjeta
          </p>
        </div>
        <div className="mb-4">
          <p className=" ">Nombre y apellido</p>
          <input
            className="w-full rounded-md h-[50px] border border-primary-400 px-2"
            type="text"
            placeholder="placeholder"
          />
          <p className="text-[#575757] italic">
            Ingrese los datos tal como figuran en la tarjeta
          </p>
        </div>
        <div className="flex gap-3">
          <div>
            <p className=" ">Vencimiento</p>
            <input
              className="w-full rounded-md h-[50px] border border-primary-400 px-2"
              type="text"
              placeholder="placeholder"
            />
            <p className="text-[#575757] italic">MM/AA</p>
          </div>
          <div>
            <p className=" ">CVV</p>
            <input
              className="w-full rounded-md h-[50px] border border-primary-400 px-2"
              type="text"
              placeholder="placeholder"
            />
            <p className="text-[#575757] italic">Código de 3 dígitos</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-white text-primary-600 text-[23px] font-bold w-[342px] py-3 rounded-md mt-10 shadow-lg"
            onClick={timer}
          >
            Pagar
          </button>
        </div>
      </div>
      {modal === 'loading' && <ModalLoading />}
      {modal === 'confirm' && <ModalConfirm />}
    </section>
  );
};

export default PayPage;
