'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema as schema } from './validation';

import { setUser, selectCurrentUser } from '@/features/users/userSlice';

import getLocations from '@/lib/getLocation';
import postRegister from '@/lib/postRegister';
import updateCustomer from '@/lib/updateCustomer';
import { valCreditCard } from '@/lib/valCreditCard';

type FormValues = {
  idLocation: { id: string; name: string };
};

const locations = [
  {
    id: '02000010',
    name: 'Buenos Aires',
  },
  {
    id: '14014010',
    name: 'Cordoba',
  },
  {
    id: '06441030',
    name: 'La Plata',
  },
  {
    id: '10077020',
    name: 'Rosario',
  },
  {
    id: '66028050',
    name: 'Salta',
  },
];

console.log('-----');
console.log(valCreditCard());
console.log('-----');

const UpdateUser = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  //*-------------------------------------------
  const fetchLocation = async () => {
    const data = await updateCustomer({
      fullName: 'Modificado desde el Cliente',
      address: 'Calle, Buenos Aires',
      dni: '44332244',
      numberLicence: '34533355',
      dateExpiration: '2023-04-16T12:32:54.735',
      idLocation: '02000010',
    });
    console.log(data);
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  //*-------------------------------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      idLocation: locations[2].id,
    },
  });

  const onSubmit = (values: FormValues) => {};

  return (
    <section className="flex justify-center px-2 md:px-4 py-2 md:py-4 lg:px-10 lg:py-10 bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-2 md:px-4 lg:px-10 w-full"
      >
        <label htmlFor="idLocation" className="font-semibold pb-1">
          Ciudad
        </label>

        <select
          className={`px-2 py-1.5 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
            errors.idLocation
              ? 'outline-2 outline-error-600 border-2 border-error-600'
              : ''
          } `}
          {...register('idLocation')}
        >
          <option value=""> Seleccione la ciudad</option>
          {locations &&
            locations.map((location) => {
              return (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              );
            })}
        </select>
        <p className="text-error-600 text-sm font-bold">
          {errors?.idLocation?.message}
        </p>
        <div className="flex justify-center md:justify-between pt-11">
          <button
            className=" hidden md:block py-2 px-7 mt-4 w-48 bg-white text-base text-primary-600 rounded-[10px] justify-self-end font-semibold"
            type="button"
            onClick={() => router.back()}
          >
            Volver
          </button>
          <button
            className="py-2 px-7 mt-4 w-48 bg-primary-600 text-base text-primary-50 font-semibold rounded-[10px] self-end"
            type="submit"
          >
            Guardar y Avanzar
          </button>
        </div>
      </form>
    </section>
  );
};
export default UpdateUser;
