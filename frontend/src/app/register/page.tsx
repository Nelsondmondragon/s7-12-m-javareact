'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import {
  setUser,
  openModalLoginError,
  selectShowModalLoginError,
  selectCurrentUser,
} from '@/features/users/userSlice';

import { yupResolver } from '@hookform/resolvers/yup';
import { Schema as schema } from './registerValidation';
import verifyEmail from '@/lib/verifyEmail';

import ModalError from './ModalError';

type FormValues = {
  password: string;
  email: string;
  confirmPassword: string;
};

const Register = () => {
  const currentUser = useSelector(selectCurrentUser);
  const showModalLoginError = useSelector(selectShowModalLoginError);

  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: currentUser.email,
      password: currentUser.password,
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const RegisterUser = async (values: FormValues) => {
    const validEmail = await verifyEmail({ email: values.email });

    if (validEmail) {
      dispatch(openModalLoginError());
      return;
    }

    const data = {
      email: values.email,
      password: values.password,
    };

    // se crea el estado usuario en Creación y se pasa al siguiente paso
    // actualizar datos en el localstorage y estado global
    const newUser: User = {
      ...currentUser,
      email: values.email,
      password: values.password,
    };
    dispatch(setUser(newUser));
    router.push('/updateuser');
  };

  const onSubmit = (values: FormValues) => {
    RegisterUser(values);
  };

  return (
    <>
      <section className="flex justify-center px-2 md:px-4 py-2 md:py-4 lg:px-10 lg:py-10 bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-center ">
        <div className="flex justify-center rounded-[10px] md:rounded-[20px] bg-white bg-opacity-70 max-w-7xl">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="flex flex-col">
              <h1 className="text-3xl text-center md:text-left md:text-4xl px-2 md:px-8 lg:px-16 py-4 md:py-10 font-bold">
                Registro de usuario
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 px-2 md:px-8 lg:px-16 gap-6">
                <div className="info flex flex-col">
                  <p className="text-xl md:text-2xl">
                    Para empezar te pediremos algunos datos. <br />
                    <br /> Toda la información que nos brindes será utilizada
                    para agilizar el proceso de reserva y es estrictamente
                    confidencial.
                  </p>
                </div>

                <div className="">
                  <div className=" relative w-full flex flex-col h-24 mb-2 self-end">
                    <label htmlFor="email" className="font-semibold pb-2">
                      Email
                    </label>
                    <input
                      className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                        errors.email
                          ? 'outline-2 outline-error-600 border-2 border-error-600'
                          : ''
                      } `}
                      {...register('email')}
                      placeholder="john@correo.com"
                    />
                    <p className="text-error-600 text-sm font-bold">
                      {errors?.email?.message}
                    </p>
                  </div>
                  <div className=" relative w-full flex flex-col h-24 mb-2 self-end">
                    <label htmlFor="password" className="font-semibold pb-2">
                      Contraseña
                    </label>
                    <input
                      className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                        errors.password
                          ? 'outline-2 outline-error-600 border-2 border-error-600'
                          : ''
                      } `}
                      {...register('password')}
                    />
                    <p className="text-error-600 text-sm font-bold">
                      {errors?.password?.message}
                    </p>
                  </div>
                  <div className=" relative w-full flex flex-col h-24 mb-2 self-end">
                    <label
                      htmlFor="repeatPassword"
                      className="font-semibold pb-2"
                    >
                      Repetir Contraseña
                    </label>
                    <input
                      type="password"
                      className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                        errors.email
                          ? 'outline-2 outline-error-600 border-2 border-error-600'
                          : ''
                      } `}
                      {...register('confirmPassword')}
                    />
                    <p className="text-error-600 text-sm font-bold">
                      {errors?.confirmPassword?.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-16 md:px-8 flex justify-center md:justify-between  items-center mb-8">
              <button
                className="hidden md:block py-4 px-7 w-40 bg-white text-base text-primary-600 rounded-md"
                // onClick={() => router.back()}
                onClick={() => router.push('/')}
              >
                Volver al inicio
              </button>
              <button
                className="py-4 px-7 w-40 bg-primary-600 text-base text-primary-50 rounded-md "
                type="submit"
              >
                Iniciar registro
              </button>
            </div>
          </form>
        </div>
      </section>
      {showModalLoginError && <ModalError />}
    </>
  );
};
export default Register;
