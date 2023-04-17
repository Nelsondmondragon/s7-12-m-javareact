'use client';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import {
  closeModalRegisterSuccess,
  selectShowModalRegisterSuccess,
} from '@/features/users/userSlice';
import Image from 'next/image';

type Props = {};
const ModalSuccess = (props: Props) => {
  const showModal = useSelector(selectShowModalRegisterSuccess);
  const dispatch = useDispatch();
  const router = useRouter();

  const closeModal = () => {
    dispatch(closeModalRegisterSuccess());
    router.push('/');
  };
  const goProfile = () => {
    dispatch(closeModalRegisterSuccess());
    router.push('/profile');
  };

  return (
    <section className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[200]  ">
      <article className="h-[500px] w-[500px] relative p-4 rounded-2xl bg-neutral-200 mx-auto">
        <FaTimes
          size={24}
          className="absolute top-4 right-4 hover:text-primary-700 cursor-pointer"
          onClick={closeModal}
        />
        <div className=" flex flex-col justify-center items-center w-full h-full">
          <div className="text-center text-xl">
            <p className="text-2xl font-semibold mb-8">¡Listo!</p>
            <p className="mb-4">Registro finalizado</p>
          </div>

          <Image
            src="/assets/images/success.svg"
            alt="icon succes"
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
              Volver al inicio
            </button>
            <button
              type="submit"
              onClick={goProfile}
              className=" cursor-pointer w-full bg-primary-600 px-8 py-2 rounded-[10px] text-white hover:bg-primary-100"
            >
              Ver perfil
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};
export default ModalSuccess;
