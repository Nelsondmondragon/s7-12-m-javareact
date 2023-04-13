'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { yupResolver } from '@hookform/resolvers/yup';
import { Schema as schema } from './registerValidation';
import { useState } from 'react';
import postRegister from '@/lib/postRegister';

type FormValues = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  confirmPassword: string;
};

const Register1 = ({pasos, actualizarDatos}) => {
  const router = useRouter();
  
  
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    resolver: yupResolver(schema),
  });
  
  const RegisterUser = async (values: FormValues) => {
    
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    }
    actualizarDatos(data)
    console.log('guardar datatos parcial');
    pasos(1)
   console.log(values);
   console.log(data);
  };                                                                                        
  
  const onSubmit = (values: FormValues) => {
    RegisterUser(values);
  };

  return (
    <div className="register flex justify-center px-10 py-11 bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-center ">
      <div className='flex justify-center rounded-[20px] bg-form backdrop-blur-[8px] px-16 py-10'>
        <div className="info w-1/2 flex flex-col h-96">
          <h1 className="text-4xl pb-5 font-bold">Registro de usuario</h1>
          <p className="text-2xl">
            Para empezar te pediremos algunos datos. <br /> <br />
            Toda la información que nos brindes será utilizada para agilizar el
            proceso de reserva y es estrictamente confidencial.
          </p>
          <button className="py-4 px-7 mt-4 w-40 bg-[#FAFAFA] text-base text-[#03649B] rounded-md justify-self-end"> Volver al inicio
          </button>
        </div>
        <div className="w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col'>
            <div className="w-2/3 flex flex-col pb-2 self-end">
              <label htmlFor="firstName" className="font-semibold pb-2">
                Nombre
              </label>
              <input
                className="rounded-md h-11 bg-[#FFFFFF] outline-none px-2 py-4"
                {...register('firstName')}
              />
              <p className="text-red-600 text-sm font-bold">
                {errors?.firstName?.message}
              </p>
            </div>
            <div className="w-2/3 flex flex-col pb-2 self-end">
              <label htmlFor="lastName" className="font-semibold pb-2">
                Apellido
              </label>
              <input
                className="rounded-md h-11 bg-[#FFFFFF] outline-none px-2 py-4"
                {...register('lastName')}
              />
              <p className="text-red-600 text-sm font-bold">
                {errors?.lastName?.message}
              </p>
            </div>
            <div className="w-2/3 flex flex-col pb-2 self-end">
              <label htmlFor="email" className="font-semibold pb-2">
                Email
              </label>
              <input
                className="rounded-md h-11 bg-[#FFFFFF] outline-none px-2 py-4"
                {...register('email')}
              />
              <p className="text-red-600 text-sm font-bold">
                {errors?.email?.message}
              </p>
            </div>

            <div className="w-2/3 flex flex-col pb-2 self-end">
              <label htmlFor="password" className="font-semibold pb-2">
                Contraseña
              </label>
              <input
                className="rounded-md h-11 bg-[#FFFFFF] outline-none px-2 py-4"
                {...register('password')}
              />
              <p className="text-red-600 text-sm font-bold">
                {errors?.password?.message}
              </p>
            </div>
            <div className="w-2/3 flex flex-col self-end">
              <label htmlFor="repeatPassword" className="font-semibold pb-2">
                Repetir Contraseña
              </label>
              <input
                className="rounded-md h-11 bg-[#FFFFFF] outline-none px-2 py-4"
                {...register('confirmPassword')}
              />
              <p className="text-red-600 text-sm font-bold">
                {errors?.confirmPassword?.message}
              </p>
            </div>

            <button className="py-4 px-7 mt-4 w-40 bg-[#03649B] text-base text-[#D2EEFE] rounded-md self-end" type="submit"> Iniciar registro
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register1;
