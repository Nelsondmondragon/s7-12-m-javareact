import Image from 'next/image';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

type Props = {};
export const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-300 p-16 text-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="flex">
          <Image
            src={'/assets/images/logo_tr.png'}
            alt="logo"
            width={250}
            height={185}
          />
          <div>
            <p>Siguenos en:</p>
            <div className="flex justify-center items-center space-x-4">
              <span>
                <FaInstagram size={24} />
              </span>
              <span>
                <FaFacebook size={24} />
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-col w-full">
            <p
              onClick={() => console.log('ir a preguntas frecuentes')}
              className="cursor-pointer mb-2 hover:underline hover:text-black/80"
            >
              Preguntas frecuentes
            </p>
            <p
              onClick={() => console.log('ir a preguntas frecuentes')}
              className="cursor-pointer mb-2 hover:underline hover:text-black/80"
            >
              Política de privacidad de datos personales
            </p>
            <p
              onClick={() => console.log('ir a preguntas frecuentes')}
              className="cursor-pointer mb-2 hover:underline hover:text-black/80"
            >
              Política de Cookies
            </p>
            <p
              onClick={() => console.log('ir a preguntas frecuentes')}
              className="cursor-pointer mb-2 hover:underline hover:text-black/80"
            >
              Consentimiento para el uso de Cookies
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center space-x-4 bg-gray-100 border-2 border-gray-500 p-4">
            <span>
              <FaWhatsapp size={42} />
            </span>
            <span>+54 9 12 2659-2638</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
