'use client';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';
import { FaTimes } from 'react-icons/fa';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema as schema } from './loginValidation';

import Cookies from 'js-cookie';

import {
  openModalLoginError,
  selectShowModalLoginError,
  setUser,
} from '@/features/users/userSlice';
import postLogin from '@/lib/postLogin';
import getUser from '@/lib/getUser';
import ModalError from './ModalError';
import { Hero } from '@/components/Hero';
import { TypesVehicle } from '@/components/typeVehicle';

type FormValues = {
  password: string;
  email: string;
};

const Login = () => {
  const showModalLoginError = useSelector(selectShowModalLoginError);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const closeModal = () => {
    router.back();
  };

  const LoginUser = async (credentials: FormValues) => {
    const loginResult = postLogin(credentials);
    const result = await loginResult;

    if (!result.token) {
      dispatch(openModalLoginError());
      return;
    }

    const getUserData = getUser(result.token);
    const userData = await getUserData;
    localStorage.setItem('token', JSON.stringify(result));
    Cookies.set('token', result.token);

    console.log(userData);

    // if (userData.fullName) {
    //   router.push('/updateuser');
    // } else {
    dispatch(setUser(userData));
    // Cookies.set('user', JSON.stringify(userData));
    localStorage.setItem('user', JSON.stringify(userData));
    reset();
    closeModal();
    // }
  };

  const onSubmit = (credentials: FormValues) => {
    LoginUser(credentials);
    // if (pathname.includes('booking')) {
    //   router.push(`/pay`);

    // }
    ['small', 'medium', 'large'].includes(pathname) && router.push(`/pay`);
  };

  return (
    <>
      <Hero />
      <TypesVehicle />
      <section className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[150]  ">
        <article className="h-[500px] w-[500px] relative p-4 rounded-2xl bg-neutral-200 mx-auto">
          <FaTimes
            size={24}
            className="absolute top-4 right-4 hover:text-primary-700 cursor-pointer"
            onClick={closeModal}
          />
          <form
            className="w-full h-full flex flex-col justify-center "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full relative py-0 px-4 mx-auto h-24 mb-4 flex flex-col">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                {...register('email')}
                placeholder="usuario@correo.com"
                className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                  errors.email
                    ? 'outline-2 outline-error-600 border-2 border-error-600'
                    : ''
                } `}
              />
              <p className="text-error-600 text-sm font-bold">
                {errors?.email?.message}
              </p>
            </div>
            <div className="w-full relative py-0 px-4 mx-auto h-24 mb-4  flex flex-col">
              <label htmlFor="password" className="font-semibold">
                Clave
              </label>
              <input
                {...register('password')}
                placeholder="Clave"
                className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                  errors.password
                    ? 'outline-2 outline-error-600 border-2 border-error-600'
                    : ''
                } `}
              />
              <p className="text-error-600 text-sm font-bold">
                {errors?.password?.message}
              </p>
            </div>

            <p className="text-center text-sm mb-8 ">
              <span className="italic  "> ¿Olvidaste tu contraseña?</span>{' '}
              <span
                className="font-semibold cursor-pointer hover:underline"
                onClick={() => alert('recuperar')}
              >
                Recuperar
              </span>
            </p>
            <div className="w-3/5 mx-auto">
              <button
                type="submit"
                className="w-full bg-neutral-100 px-8 py-2 rounded-lg text-primary-500 font-semibold  hover:bg-primary-100"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </article>
      </section>
      {showModalLoginError && <ModalError />}
    </>
  );
};

export default Login;
