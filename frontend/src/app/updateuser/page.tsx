'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import vector from './vector.svg';
import { useRouter } from 'next/navigation';
// import { Schema as schema } from './registerValidation';
import { Schema as schema } from './validation';
import postRegister from '@/lib/postRegister';
import Image from 'next/image';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  address: string;
  dni: string;
  licence: string;
  licenceDate: string;
};

const UpdateUser = () => {
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
      city: '',
      address: '',
      dni: '',
      licence: '',
      licenceDate: '',
    },
    resolver: yupResolver(schema),
  });

  const RegisterUser = async (values: FormValues) => {
    console.log('guardando datos registro2');
    console.log(values);
    // validar la respuesta
    // actualizar datos en el localstorage y estado global
    // si el usuario esta creado y no esta actalizado se debe de enviar a completar los datos del mismo
    router.push('/creditcard');
  };

  const onSubmit = (values: FormValues) => {
    RegisterUser(values);
  };

  return (
    <section className="flex justify-center px-2 md:px-4 py-2 md:py-4 lg:px-10 lg:py-10 bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-center ">
      <div className="flex justify-center rounded-[10px] md:rounded-[20px] bg-white bg-opacity-70 max-w-7xl w-full pb-12">
        <div className="flex flex-col w-full">
          <div className="px-2 md:px-4 py-2 md:py-4 lg:px-10 lg:py-6">
            <h1 className=" flex items-center space-x-2 text-center text-2xl md:text-4xl pb-4">
              <span className="hidden md:block">
                <Image
                  src={'/assets/images/updateuser.svg'}
                  alt="location icon"
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] mr-2 md:mr-4"
                />
              </span>
              Datos de contacto
            </h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-2 md:px-4 lg:px-10 w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <div className="w-full">
                <div className="w-full flex flex-col pb-2 self-end">
                  <label htmlFor="firstName" className="font-semibold pb-2">
                    Nombre
                  </label>
                  <input
                    className={`rounded-md h-11 border-2 border-transparent focus:border-primary-100 bg-white outline-none px-2 py-4 ${
                      errors.firstName ? 'outline-0  border-error-600' : ''
                    }`}
                    {...register('firstName')}
                    placeholder="john"
                  />
                  <p className="text-error-600 text-sm font-bold">
                    {errors?.firstName?.message}
                  </p>
                </div>
                <div className="w-full flex flex-col pb-2 self-end">
                  <label htmlFor="lastName" className="font-semibold pb-2">
                    Apellido
                  </label>
                  <input
                    className={`rounded-md h-11 border-2 border-transparent focus:border-primary-100 bg-white outline-none px-2 py-4 ${
                      errors.lastName ? 'outline-0  border-error-600' : ''
                    }`}
                    {...register('lastName')}
                    placeholder="Doe"
                  />
                  <p className="text-error-600 text-sm font-bold">
                    {errors?.lastName?.message}
                  </p>
                </div>
                <div className="w-full flex flex-col pb-2 self-end">
                  <label htmlFor="city" className="font-semibold pb-2">
                    Ciudad
                  </label>
                  <input
                    className={`rounded-md h-11 border-2 border-transparent focus:border-primary-100 bg-white outline-none px-2 py-4 ${
                      errors.city ? 'outline-0  border-error-600' : ''
                    }`}
                    {...register('city')}
                    placeholder="Ciudad"
                  />
                  <p className="text-error-600 text-sm font-bold">
                    {errors?.city?.message}
                  </p>
                </div>
                <div className="w-full flex flex-col pb-2 self-end">
                  <label htmlFor="address" className="font-semibold pb-2">
                    Domicilio
                  </label>
                  <input
                    className={`rounded-md h-11 border-2 border-transparent focus:border-primary-100 bg-white outline-none px-2 py-4 ${
                      errors.address ? 'outline-0  border-error-600' : ''
                    }`}
                    {...register('address')}
                    placeholder="Domicilio actual"
                  />
                  <p className="text-error-600 text-sm font-bold">
                    {errors?.address?.message}
                  </p>
                </div>
              </div>

              <div className="w-full">
                <div className="w-full flex flex-col pb-2 self-end">
                  <label htmlFor="dni" className="font-semibold pb-2">
                    DNI
                  </label>
                  <input
                    className={`rounded-md h-11 border-2 border-transparent focus:border-primary-100 bg-white outline-none px-2 py-4 ${
                      errors.dni ? 'outline-0  border-error-600' : ''
                    }`}
                    {...register('dni')}
                    placeholder="Identificación"
                  />
                  <p className="text-error-600 text-sm font-bold">
                    {errors?.dni?.message}
                  </p>
                </div>

                <div className="w-full flex flex-col pb-2 self-end">
                  <label htmlFor="licence" className="font-semibold pb-2">
                    N° Licencia conducir
                  </label>
                  <input
                    className={`rounded-md h-11 border-2 border-transparent focus:border-primary-100 bg-white outline-none px-2 py-4 ${
                      errors.licence ? 'outline-0  border-error-600' : ''
                    }`}
                    {...register('licence')}
                    placeholder="Identificación"
                  />
                  <p className="text-error-600 text-sm font-bold">
                    {errors?.licence?.message}
                  </p>
                </div>

                <div className="w-full flex flex-col pb-2 self-end">
                  <label htmlFor="licenceDate" className="font-semibold pb-2">
                    Fecha de vencimiento
                  </label>
                  <input
                    className={`rounded-md h-11 border-2 border-transparent focus:border-primary-100 bg-white outline-none px-2 py-4 ${
                      errors.licenceDate ? 'outline-0  border-error-600' : ''
                    }`}
                    type="date"
                    {...register('licenceDate')}
                    placeholder="DD/MM/AA"
                  />
                  <p className="text-error-600 text-sm font-bold">
                    {errors?.licenceDate?.message}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-between pt-11">
              <button
                className=" hidden md:block py-2 px-7 mt-4 w-48 bg-white text-base text-primary-600 rounded-md justify-self-end font-bold"
                type="button"
                onClick={() => router.back()}
              >
                Volver
              </button>
              <button
                className="py-2 px-7 mt-4 w-48 bg-[#03649B] text-base text-[#D2EEFE] rounded-md self-end"
                type="submit"
              >
                Guardar y Avanzar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default UpdateUser;
