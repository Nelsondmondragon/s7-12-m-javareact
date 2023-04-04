'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema as schema } from './registerValidation';

type FormValues = {
  name: string;
  lastname: string;
  password: string;
  repeatPassword: string;
  email: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      lastname: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const RegisterUser = async (values: FormValues) => {
    console.log(values);
  };

  const onSubmit = (values: FormValues) => {
    RegisterUser(values);
  };

  return (

    <div>
    <div className='register flex justify-center px-10 py-11'>
      <div className='info w-1/2 pl-6'>
        <h1 className='text-4xl pb-5 font-bold'>Registro de usuario</h1>
        <p className='text-2xl'>Para empezar te pediremos algunos datos. <br /> <br />
          Toda la información que nos brindes será utilizada para agilizar el proceso de reserva y es estrictamente confidencial.</p>
      </div>
      <div className="w-1/2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col pb-2">
            <label htmlFor="name" className='font-semibold pb-2'>Nombre</label>
            <input className='w-2/3 rounded-md h-11 bg-slate-200 outline-none px-2 py-4' {...register('name')} />
            <p className="text-red-600 text-sm font-bold">
              {errors?.name?.message}
            </p>
          </div>
          <div className="flex flex-col pb-2">
            <label htmlFor="lastname" className='font-semibold pb-2'>Apellido</label>
            <input className='w-2/3 rounded-md h-11 bg-slate-200 outline-none px-2 py-4' {...register('lastname')} />
            <p className="text-red-600 text-sm font-bold">
              {errors?.lastname?.message}
            </p>
          </div>
          <div className="flex flex-col pb-2">
            <label htmlFor="email" className='font-semibold pb-2' >Email</label>
            <input className='w-2/3 rounded-md h-11 bg-slate-200 outline-none px-2 py-4' {...register('email')} />
            <p className="text-red-600 text-sm font-bold">
              {errors?.email?.message}
            </p>
          </div>

          <div className="flex flex-col pb-2">
            <label htmlFor="password" className='font-semibold pb-2' >Contraseña</label>
            <input className='w-2/3 rounded-md h-11 bg-slate-200 outline-none px-2 py-4' {...register('password')} />
            <p className="text-red-600 text-sm font-bold">
              {errors?.password?.message}
            </p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="repeatPassword" className='font-semibold pb-2'>Repetir Contraseña</label>
            <input className='w-2/3 rounded-md h-11 bg-slate-200 outline-none px-2 py-4' {...register('repeatPassword')} />
            <p className="text-red-600 text-sm font-bold">
              {errors?.repeatPassword?.message}
            </p>
          </div>

          <button className="py-4 px-9 mt-4 bg-slate-400 text-xl rounded-md" type="submit">
            Iniciar registro
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}
export default Register;
