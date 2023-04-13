'use client';
import { openModalLogin } from '@/features/users/userSlice';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
// import { FaArrowLeft } from 'react-icons/fa';

export default function NewRegister() {
  const router = useRouter();
  const dispatch = useDispatch();

  // const handleGoBack = () => {
  //   router.back();
  // };
  return (
    <section className="relative  bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-top">
      {/* <button
        onClick={handleGoBack}
        className="md:hidden absolute top-2 left-4 "
      >
        <div className="flex items-center space-x-4 text-white text-lg">
          <FaArrowLeft />
          <p>Nosotros</p>
        </div>
      </button> */}
      <div className="flex flex-col justify-center items-center gap-4 md:gap-0 p-2 md:p-8 lg:px-16 xl:px-24 ">
        <div className="relative bg-white bg-opacity-70 p-2 md:h-4/5 md:p-8 lg:p-12 xl:px-16  rounded-[10px] md:rounded-[20px] ">
          <h2 className="font-semibold text-center md:text-left mb-3 md:mb-10  text-xl md:text-4xl">
            Nos alegra mucho verte por acá
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:text-3xl">
            <div>
              <p className="mb-3">
                Desde esta sección podrás acceder, ingresar y actualizar tus
                datos.
              </p>
              <p className="mb-3">
                También accederás de manera fácil y rápida a tus reservas.
              </p>
              <p className="mb-3">
                Solo deberás iniciar sesión con tu cuenta y si aún no tenes una,
                podrás registrarte en pocos pasos.
              </p>
            </div>

            <div className="bg-neutral-100 p-4 relative md:p-8 rounded-[10px] md:rounded-[20px] flex md:gap-8 flex-col lg:-translate-y-10 lg:text-2xl ">
              <div className="flex-1">
                <h2 className="font-semibold text-center  mb-3 md:mb-10 text-2xl md:text-3xl">
                  ¡Empecemos!
                </h2>
                <p className="text-center">
                  Si ya tenes una cuenta, inicia sesión{' '}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <button
                  className="btn btnSecond my-4 block"
                  onClick={() => dispatch(openModalLogin())}
                >
                  Iniciar sesión
                </button>

                <p className="font-medium ">¿aún no tienes una cuenta?</p>

                <button
                  className="btn mt-1 mb-4"
                  onClick={() => router.push('/register')}
                >
                  Registrarme
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
