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
            src={'/assets/images/logos/logo-footer.png'}
            alt="logo"
            width={150}
            height={100}
            className="w-[150px] h-[100px] mr-8"
          />
          <div>
            <p className="text-xl">Siguenos en:</p>
            <div className="flex justify-center items-center space-x-4 mt-4">
              <span>
                <Image
                  src={'/assets/images/logos/instagram.png'}
                  alt="instagram logo"
                  width={48}
                  height={48}
                  className="w-[48px] h-[48px] mr-4"
                />
              </span>
              <span>
                <Image
                  src={'/assets/images/logos/facebook.png'}
                  alt="facebook logo"
                  width={48}
                  height={48}
                  className="w-[48px] h-[48px] mr-4"
                />
              </span>
              <span>
                <Image
                  src={'/assets/images/logos/linkedin.png'}
                  alt="linkedin logo"
                  width={48}
                  height={48}
                  className="w-[48px] h-[48px] mr-4"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-col w-full">
            <p
              onClick={() => alert('ir a preguntas frecuentes')}
              className="cursor-pointer mb-2 hover:underline"
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
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="flex justify-center items-center space-x-4">
            <span>
              <Image
                src={'/assets/images/logos/whatsapp.png'}
                alt="linkedin logo"
                width={48}
                height={48}
                className="w-[48px] h-[48px]"
              />
            </span>
            <span className="text-xl">+54 9 12 2659-2638</span>
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
