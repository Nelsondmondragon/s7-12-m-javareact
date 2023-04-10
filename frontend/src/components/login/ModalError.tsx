'use client';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import {
  closeModalLogin,
  closeModalLoginError,
  selectShowModalLoginError,
} from '@/features/users/userSlice';
import Image from 'next/image';

type Props = {};
const ModalError = (props: Props) => {
  const showModal = useSelector(selectShowModalLoginError);
  const dispatch = useDispatch();
  const router = useRouter();

  const closeModal = () => {
    dispatch(closeModalLoginError());
  };
  const register = () => {
    dispatch(closeModalLoginError());
    dispatch(closeModalLogin());
    router.push('/register');
  };

  return (
    <section className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[100]  ">
      <article className="h-[500px] w-[500px] relative p-4 rounded-2xl bg-neutral-200 mx-auto">
        <FaTimes
          size={24}
          className="absolute top-4 right-4 hover:text-primary-700 cursor-pointer"
          onClick={closeModal}
        />
        <div className=" flex flex-col justify-center items-center w-full h-full">
          <div className="text-center text-xl">
            <p className="text-2xl font-semibold mb-8">¡Atención!</p>
            <p className="mb-4">
              El mail ingresado o contraseña no coinciden en nuestros registros.
            </p>
            <p className="mb-8">
              Si no estas registrado, te vamos a pedir que crees un usuario en
              nuestra página
            </p>
          </div>

          <Image
            src="/assets/images/error-icon.png"
            alt="icon error"
            className="object-contain mb-8"
            width={80}
            height={80}
          />

          <div className="flex w-full space-x-4">
            <button
              type="submit"
              onClick={closeModal}
              className="w-full bg-neutral-100 px-8 py-2 rounded-lg text-primary-500 hover:bg-primary-100"
            >
              Intentar de nuevo
            </button>
            <button
              type="submit"
              onClick={register}
              className=" cursor-pointer w-full bg-primary-600 px-8 py-2 rounded-[10px] text-white hover:bg-primary-100"
            >
              Registrarme
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};
export default ModalError;
