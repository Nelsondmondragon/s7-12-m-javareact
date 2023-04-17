import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const Footer = () => {
  const router = useRouter();

  return (
    <footer className="text-sm md:text-base lg:text-lg p-4  md:p-8 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 w-full">
        <div className="flex order-1">
          <Image
            src={'/assets/images/logos/logo-footer.png'}
            alt="logo"
            width={150}
            height={100}
            className="hidden lg:block w-[150px] h-[100px] mr-8"
          />
          <div>
            <p>Siguenos en:</p>
            <div className="flex justify-center items-center space-x-2 lg:space-x-3 mt-2 lg:mt-4">
              <span>
                <Image
                  src={'/assets/images/logos/instagram.png'}
                  alt="instagram logo"
                  width={48}
                  height={48}
                  className="w-6 h-6  md:w-8 md:h-8 xl:w-10 xl:h-10"
                />
              </span>
              <span>
                <Image
                  src={'/assets/images/logos/facebook.png'}
                  alt="facebook logo"
                  width={48}
                  height={48}
                  className="w-6 h-6  md:w-8 md:h-8 xl:w-10 xl:h-10"
                />
              </span>
              <span>
                <Image
                  src={'/assets/images/logos/linkedin.png'}
                  alt="linkedin logo"
                  width={48}
                  height={48}
                  className="w-6 h-6  md:w-8 md:h-8 xl:w-10 xl:h-10"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="flex order-none lg:order-2">
          <div className="flex-col w-full">
            <p
              onClick={() => router.push('/faq')}
              className="cursor-pointer mb-2 hover:underline "
            >
              Preguntas frecuentes
            </p>
            <p
              onClick={() => alert('ir a privacidad')}
              className="cursor-pointer mb-2 hover:underline"
            >
              Política de privacidad de datos personales
            </p>
            <p
              onClick={() => alert('ir cookies')}
              className="cursor-pointer mb-2 hover:underline"
            >
              Política de Cookies
            </p>
            <p
              onClick={() => alert('Consentimiento')}
              className="cursor-pointer mb-2 hover:underline"
            >
              Consentimiento para el uso de Cookies
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start lg:items-center lg:space-y-4 order-3 pb-2">
          <div className="justify-center items-center space-x-4 hidden lg:flex">
            <span>
              <Image
                src={'/assets/images/logos/whatsapp.png'}
                alt="linkedin logo"
                width={48}
                height={48}
                className="w-6 h-6  lg:w-12 lg:h-12 mr-4"
              />
            </span>
            <span className="text-xl">+54 9 12 2659-2638</span>
          </div>
          <div className="flex flex-col items-start">
            <p className="lg:hidden mb-2">Garantías de seguridad</p>
            <div className="flex justify-center items-center space-x-4">
              <Image
                src={'/assets/images/secure.png'}
                alt="secure image"
                width={226}
                height={77}
                className="w-auto h-6 lg:w-56 lg:h-20"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-xs lg:text-left">
        Movear @2023. Todos los derechos reservados.
      </p>
    </footer>
  );
};
