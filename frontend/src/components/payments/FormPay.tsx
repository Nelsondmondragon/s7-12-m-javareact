import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema as schema } from './formValidation';

import emailjs from '@emailjs/browser';
import { useState } from 'react';

type FormValues = {
  card_number: string;
  name: string;
  email: string;
  message: string;
};

type Props = {};
export const FormPay = (props: Props) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      card_number: '',
      name: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: FormValues) => {
    alert('revisar parametros y variables de entorno');
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[616px] h-[598px] bg-neutral-100 rounded-2xl text-[24px] px-14 py-5">
          <div className="relative py-0  mx-auto mb-4 flex flex-col">
            <label htmlFor="card_number" className=" mr-2">
              N° Tarjeta
            </label>
            <input
              {...register('card_number')}
              placeholder="Nombre  y Apellidos"
              className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                errors.card_number
                  ? 'outline-2 outline-red-500 border-2 border-red-500'
                  : ''
              } `}
            />
            <p className="text-red-600 text-xs font-bold">
              {errors?.card_number?.message}
            </p>
            <p className=" text-neutral-600 italic">
              Ingrese los 16 números de su tarjeta
            </p>
          </div>
          <div className="relative py-0  mx-auto mb-4 flex flex-col">
            <label htmlFor="name" className=" mr-2">
              Nombre y apellido
            </label>
            <input
              {...register('name')}
              placeholder="Nombre y apellido"
              className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                errors.name
                  ? 'outline-2 outline-red-500 border-2 border-red-500'
                  : ''
              } `}
            />
            <p className="text-red-600 text-xs font-bold">
              {errors?.name?.message}
            </p>
            <p className="text-neutral-600 italic">
              Ingrese los datos tal como figuran en la tarjeta
            </p>
          </div>
          <div className="relative py-0  mx-auto mb-4 flex flex-col">
            <label htmlFor="name" className=" mr-2">
              Email
            </label>
            <input
              {...register('email')}
              placeholder="Email"
              className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                errors.email
                  ? 'outline-2 outline-red-500 border-2 border-red-500'
                  : ''
              } `}
            />
            <p className="text-red-600 text-xs font-bold">
              {errors?.email?.message}
            </p>
          </div>
        </div>
        <div>
          <div className="relative py-0  mx-auto mb-4 flex flex-col md:pt-6">
            <textarea
              {...register('message')}
              placeholder="Mensaje"
              cols={30}
              rows={7}
              className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                errors.message
                  ? 'outline-2 outline-red-500 border-2 border-red-500'
                  : ''
              } `}
            ></textarea>
            <p className="text-red-600 text-sm font-bold">
              {errors?.message?.message}
            </p>
          </div>
        </div>
        <div className="mx-auto text-center">
          <button className="btn btnSecond px-12"> Enviar</button>
        </div>
      </form>
    </section>
  );
};
/* 
<div className="w-[616px] h-[598px] bg-[#D9D9D9] rounded-2xl text-[24px] px-14 py-5">
  <div className="mb-4">
    <p className=" shadow-md">N° Tarjeta</p>
    <input
      className="w-full rounded-md h-[50px] border border-primary-400 px-2"
      type="text"
      placeholder="placeholder"
    />
    <p className=" text-neutral-600 italic">
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
    <p className="text-neutral-600 italic">
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
      <p className="text-neutral-600 italic">MM/AA</p>
    </div>
    <div>
      <p className=" ">CVV</p>
      <input
        className="w-full rounded-md h-[50px] border border-primary-400 px-2"
        type="text"
        placeholder="placeholder"
      />
      <p className="text-neutral-600 italic">Código de 3 dígitos</p>
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
</div>;
*/
