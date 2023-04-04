import Image from 'next/image';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';

type Props = {};
export const Footer = (props: Props) => {
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="flex">
          <Image
            src={'/assets/images/logo.png'}
            alt="logo"
            width={150}
            height={100}
            className="w-[150px] h-[100px] mr-8"
          />
          <div>
            <p>Siguenos en:</p>
            <div className="flex justify-center items-center space-x-4 mt-4">
              <span>
                <FaInstagram size={32} />
              </span>
              <span>
                <FaFacebook size={32} />
              </span>
              <span>
                <FaLinkedinIn size={32} />
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
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="flex justify-center items-center space-x-4">
            <span>
              <FaWhatsapp size={42} />
            </span>
            <span>+54 9 12 2659-2638</span>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <Image
              src={'/assets/images/secure.png'}
              alt="secure image"
              width={226}
              height={77}
              className="w-[226px] h-[77px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
