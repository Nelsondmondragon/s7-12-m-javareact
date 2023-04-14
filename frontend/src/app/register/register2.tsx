'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { Schema as schema } from './register2Validation';
import postRegister from '@/lib/postRegister';
import Image from 'next/image';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  adress: string;
  // dni: string;
  // licence: string;
};

const Register2 = ({ pasos, actualizarDatos, datos }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      city: '',
      adress: '',
      // dni: '',
      // licence: '',
    },
    resolver: yupResolver(schema),
  });

  const RegisterUser = async (values: FormValues) => {
    console.log('guardando datos registro2');
    actualizarDatos(values);
    postRegister(datos);
    console.log(values);
  };

  const onSubmit = (values: FormValues) => {
    RegisterUser(values);
  };

  return (
    <div className="register flex justify-center px-10 py-11 bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-center ">
      <div className="rounded-[20px] bg-form backdrop-blur-[8px]">
        <div className="px-16 pt-16">
          <h2 className="text-4xl pb-4">
            <span>
              <Image
                src={'/assets/images/logos/location.png'}
                alt="location icon"
                width={60}
                height={60}
                className="w-[60px] h-[60px] mr-2 md:mr-4"
              />
            </span>
            Datos de contactosss
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="px-16 pb-14 ">
          <div className="flex">
            <div className="pr-10">
              <div className="flex flex-col pb-2">
                <label htmlFor="name" className="font-semibold pb-2">
                  Nombre
                </label>
                <input
                  className="w-96 rounded-md h-11 bg-[#FFFFFF] outline-none px-2 py-4 border-[#77CEFF] border-solid border"
                  {...register('firstName')}
                />
                <p className="text-red-600 text-sm font-bold">
                  {errors?.firstName?.message}
                </p>
              </div>
              <div className="flex flex-col pb-2">
                <label htmlFor="lastName" className="font-semibold pb-2">
                  Apellido
                </label>
                <input
                  className="w-96 rounded-md h-11 bg-[#FFFFFF] outline-none px-2 py-4 border-[#77CEFF] border-solid border"
                  {...register('lastName')}
                />
                <p className="text-red-600 text-sm font-bold">
                  {errors?.lastName?.message}
                </p>
              </div>
              <div className="flex flex-col pb-2">
                <label htmlFor="email" className="font-semibold pb-2">
                  E-mail
                </label>
                <input
                  className="w-96 rounded-md h-11 bg-[#FFFFFF] outline-none px-2 py-4 border-[#77CEFF] border-solid border"
                  {...register('email')}
                />
                <p className="text-red-600 text-sm font-bold">
                  {errors?.email?.message}
                </p>
              </div>
              <div className="flex flex-col pb-2">
                <label htmlFor="city" className="font-semibold pb-2">
                  Ciudad
                </label>
                <input
                  className="w-96 rounded-md h-11 bg-[#FFFFFF] outline-none px-2 py-4 border-[#77CEFF] border-solid border"
                  {...register('city')}
                />
                <p className="text-red-600 text-sm font-bold">
                  {errors?.city?.message}
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col pb-2">
                <label htmlFor="adress" className="font-semibold pb-2">
                  Direccion
                </label>
                <input
                  className="w-96 rounded-md h-11 bg-[#FFFFFF] outline-none px-2 py-4 border-[#77CEFF] border-solid border"
                  {...register('adress')}
                />
                <p className="text-red-600 text-sm font-bold">
                  {errors?.adress?.message}
                </p>
              </div>
              {/* <div className="flex flex-col pb-2">
                <label htmlFor="dni" className="font-semibold pb-2">
                  DNI
                </label>
                <input className="w-96 rounded-md h-11 bg-[#FFFFFF] outline-none px-2 py-4 border-[#77CEFF] border-solid border" 
                {...register('dni')}/>
                <p className="text-red-600 text-sm font-bold">
                  {errors?.dni?.message}
                </p>
              </div> */}
              {/* <div className="flex flex-col pb-2">
                <label htmlFor="licence" className="font-semibold pb-2">
                  N° Licencia conducir
                </label>
                <input className="w-96 rounded-md h-11 bg-[#FFFFFF] outline-none px-2 py-4 border-[#77CEFF] border-solid border" {...register('licence')}/>
                <p className="text-red-600 text-sm font-bold">
                  {errors?.licence?.message}
                </p>
              </div> */}
              {/* <div className="flex flex-col pb-2">
                <label htmlFor="name" className="font-semibold pb-2">
                  Fecha de nacimiento
                </label>
                <input className="w-96 rounded-md h-11 bg-[#FFFFFF] outline-none px-2 py-4 border-[#77CEFF] border-solid border" type='date' {...register('birthdate')}/>
                <p className="text-red-600 text-sm font-bold">
                  {errors?.birthdate?.message}
                </p>
              </div> */}
            </div>
          </div>

          <div className="flex justify-between pt-11">
            <button
              className="py-2 px-7 mt-4 w-48 bg-[#FAFAFA] text-base text-[#03649B] rounded-md justify-self-end font-bold"
              type="button"
              onClick={() => {
                pasos(0);
              }}
            >
              {' '}
              Volver
            </button>
            <button
              className="py-2 px-7 mt-4 w-48 bg-[#03649B] text-base text-[#D2EEFE] rounded-md self-end"
              type="submit"
            >
              {' '}
              Guardar y Avanzar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register2;
