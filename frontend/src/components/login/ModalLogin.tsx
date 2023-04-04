'use client';
import { useRouter } from 'next/navigation';
import { FaTimes } from 'react-icons/fa';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema as schema } from './loginValidation';

import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';

import { CustomButton } from '@/components/common/CustomButton';
import {
  closeModalLogin,
  selectCurrentUser,
  selectShowModalLogin,
  setUser,
} from '@/features/users/userSlice';
import postLogin from '@/lib/postLogin';

type FormValues = {
  password: string;
  email: string;
};

export const ModalLogin = () => {
  const currentUser = useSelector(selectCurrentUser);
  const showModal = useSelector(selectShowModalLogin);
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
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
    // call backend to validate credencial
    const loginResult = postLogin(credentials);
    const result = await loginResult;

    if (result.status !== 200) {
      alert('credenciales invalidas');
      return;
    }
    dispatch(setUser(credentials));
    Cookies.set('token', result.token);
    localStorage.setItem('token', JSON.stringify(result));
    closeModal();
    router.push('/booking');
  };

  const onSubmit = (credentials: FormValues) => {
    LoginUser(credentials);
  };

  return (
    // <section className="absolute bg-white/60 w-screen h-screen top-0 left-0 z-50 flex justify-center items-center ">
    <section className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50 ">
      <article className="h-[400px] w-[380px] relative p-4 rounded-2xl bg-primary-200 mx-auto">
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
              className="p-2 rounded-lg "
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
              className="p-2 rounded-lg "
            />
            <p className="text-red-600 text-sm font-bold">
              {errors?.password?.message}
            </p>
          </div>

          <p className="text-center text-sm mb-8 ">
            ¿Olvidaste tu contraseña?{' '}
            <span className="font-semibold "> Recuperar</span>
          </p>
          <div className="w-4/5 mx-auto">
            <CustomButton
              type={'Primary'}
              text={'Iniciar sesión'}
              onClick={() => console.log('hizo click')}
              bgColor="#ff0000"
              txColor="#ffffff"
            />
          </div>
        </form>
      </article>
    </section>
  );
};
