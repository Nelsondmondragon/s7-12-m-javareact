'use client';
import { useDispatch, useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema as schema } from './loginValidation';

import Cookies from 'js-cookie';

import {
  closeModalLogin,
  openModalLoginError,
  selectShowModalLogin,
  selectShowModalLoginError,
  setUser,
} from '@/features/users/userSlice';
import postLogin from '@/lib/postLogin';
import getUser from '@/lib/getUser';
import ModalError from './ModalError';

type FormValues = {
  password: string;
  email: string;
};

export const ModalLogin = () => {
  const showModal = useSelector(selectShowModalLogin);
  const showModalLoginError = useSelector(selectShowModalLoginError);
  const dispatch = useDispatch();

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

  if (!showModal) return null;

  const closeModal = () => {
    dispatch(closeModalLogin());
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

    dispatch(setUser(userData));
    Cookies.set('token', result.token);
    localStorage.setItem('token', JSON.stringify(result));
    localStorage.setItem('user', JSON.stringify(userData));
    reset;
    closeModal();
  };

  const onSubmit = (credentials: FormValues) => {
    LoginUser(credentials);
  };

  return (
    <>
      <section className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50 ">
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
            <div className="w-full relative py-0 px-4 mx-auto mb-4 flex flex-col">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                {...register('email')}
                placeholder="usuario@correo.com"
                className={`p-2 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                  errors.email
                    ? 'outline-2 outline-red-500 border-2 border-red-500'
                    : ''
                } `}
              />
              <p className="text-red-600 text-sm font-bold">
                {errors?.email?.message}
              </p>
            </div>
            <div className="w-full relative py-0 px-4 mx-auto mb-4  flex flex-col">
              <label htmlFor="password" className="font-semibold">
                Clave
              </label>
              <input
                {...register('password')}
                placeholder="Clave"
                className={`p-2 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                  errors.password
                    ? 'outline-2 outline-red-500 border-2 border-red-500'
                    : ''
                } `}
              />
              <p className="text-red-600 text-sm font-bold">
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
                className="w-full bg-neutral-100 px-8 py-2 rounded-lg text-primary-500 hover:bg-primary-100"
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
