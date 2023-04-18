'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema as schema } from './validation';

import {
  setUser,
  selectCurrentUser,
  selectNewUser,
} from '@/features/users/userSlice';

import getLocations from '@/lib/getLocation';
import moment from 'moment';
type FormValues = {
  fullName: string;
  idLocation: string;
  address: string;
  dni: string;
  numberLicence: string;
  dateExpiration: Date;
};

const UpdateUser = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const [test, setTest] = useState(currentUser.dateExpiration);

  const newUser = useSelector(selectNewUser);
  const [locations, setLocations] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      fullName: currentUser.fullName,
      idLocation: currentUser.idLocation,
      address: currentUser.address,
      dni: currentUser.dni,
      numberLicence: currentUser.numberLicence,
      dateExpiration: test,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: FormValues) => {
    const newUserData = { ...currentUser, ...values };
    dispatch(setUser(newUserData));
    router.push('/creditcard');
  };

  const fetchLocation = async () => {
    setIsLoading(false);
    const data = await getLocations();
    setLocations(data);
    setIsLoading(true);
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <section className="flex justify-center px-2 md:px-4 py-2 md:py-4 lg:px-10 lg:py-10 bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-center ">
      <div className="flex justify-center rounded-[10px] md:rounded-[20px] bg-white bg-opacity-70 max-w-7xl w-full pb-12">
        <div className="flex flex-col w-full">
          <div className="px-2 md:px-4 py-2 md:py-4 lg:px-10 lg:py-6">
            <h1 className=" flex items-center space-x-2 text-center text-2xl md:text-4xl pb-4">
              <span className="hidden md:block">
                <Image
                  src={'/assets/images/updateuser.svg'}
                  alt="Profile icon"
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] mr-2 md:mr-4"
                />
              </span>
              Datos de contacto {newUser ? 'NEW' : 'Update'}
            </h1>
          </div>
          {isLoading && (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-2 md:px-4 lg:px-10 w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <div className="w-full">
                  <div className=" relative w-full flex flex-col h-24 mb-2 self-end">
                    <label htmlFor="fullName" className="font-semibold pb-1">
                      Nombre y apellido
                    </label>
                    <input
                      className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                        errors.fullName
                          ? 'outline-2 outline-error-600 border-2 border-error-600'
                          : ''
                      } `}
                      {...register('fullName')}
                      placeholder="john"
                    />
                    <p className="text-error-600 text-sm font-bold">
                      {errors?.fullName?.message}
                    </p>
                  </div>

                  <div className=" relative w-full flex flex-col h-24 mb-2 self-end">
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
                      {locations.map((location) => {
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
                  </div>

                  <div className=" relative w-full flex flex-col h-24 mb-2 self-end">
                    <label htmlFor="address" className="font-semibold pb-1">
                      Domicilio
                    </label>
                    <input
                      className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                        errors.address
                          ? 'outline-2 outline-error-600 border-2 border-error-600'
                          : ''
                      } `}
                      {...register('address')}
                      placeholder="Domicilio actual"
                    />
                    <p className="text-error-600 text-sm font-bold">
                      {errors?.address?.message}
                    </p>
                  </div>
                </div>

                <div className="w-full">
                  <div className=" relative w-full flex flex-col h-24 mb-2 self-end">
                    <label htmlFor="dni" className="font-semibold pb-1">
                      DNI
                    </label>
                    <input
                      className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                        errors.dni
                          ? 'outline-2 outline-error-600 border-2 border-error-600'
                          : ''
                      } `}
                      {...register('dni')}
                      placeholder="Identificación"
                    />
                    <p className="text-error-600 text-sm font-bold">
                      {errors?.dni?.message}
                    </p>
                  </div>

                  <div className=" relative w-full flex flex-col h-24 mb-2 self-end">
                    <label
                      htmlFor="numberLicence"
                      className="font-semibold pb-1"
                    >
                      N° Licencia conducir
                    </label>
                    <input
                      className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                        errors.numberLicence
                          ? 'outline-2 outline-error-600 border-2 border-error-600'
                          : ''
                      } `}
                      {...register('numberLicence')}
                      placeholder="Identificación"
                    />
                    <p className="text-error-600 text-sm font-bold">
                      {errors?.numberLicence?.message}
                    </p>
                  </div>

                  <div className=" relative w-full flex flex-col h-24 mb-2 self-end">
                    <label
                      htmlFor="dateExpiration"
                      className="font-semibold pb-1"
                    >
                      Fecha de vencimiento
                    </label>
                    <input
                      className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                        errors.dateExpiration
                          ? 'outline-2 outline-error-600 border-2 border-error-600'
                          : ''
                      } `}
                      type="date"
                      {...register('dateExpiration')}
                    />
                    <p className="text-error-600 text-sm font-bold">
                      {errors?.dateExpiration?.message}
                    </p>
                  </div>
                </div>
              </div>
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
          )}
        </div>
      </div>
    </section>
  );
};
export default UpdateUser;
