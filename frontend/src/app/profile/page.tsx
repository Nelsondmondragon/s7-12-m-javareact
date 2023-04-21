import Image from 'next/image';
import Link from 'next/link';

type Props = {};
const Profile = (props: Props) => {
  return (
    <section className="h-screen bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-top">
      <div className="text-white text-center p-12">
        <h1 className="text-6xl font-medium py-12">Mi cuenta</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto justify-center max-w-5xl">
          <div className="bg-white text-black flex flex-col rounded-[20px] overflow-hidden">
            <div className="flex justify-center space-x-2 items-center  text-2xl bg-black text-white rounded-[20px] h-24">
              <span>
                <Image
                  src={'/assets/images/perfil.svg'}
                  alt="profile icon"
                  width={48}
                  height={48}
                  className="w-6 h-6  lg:w-10 lg:h-10"
                />
              </span>
              <h1>Mis datos </h1>
            </div>
            <Link href={'/updateuser'}>
              <p className="text-lg mb-2 text-left ml-6 hover:underline hover:text-red-400">
                Editar datos de contacto
              </p>
            </Link>
            <Link href={'/updatecard'}>
              <p className="text-lg mb-2 text-left ml-6 hover:underline hover:text-red-400">
                Datos de pago
              </p>
            </Link>
            <Link href={'/changepassword'}>
              <p className="text-lg mb-2 text-left ml-6 hover:underline hover:text-red-400">
                Cambiar contraseña
              </p>
            </Link>
          </div>
          <div className="bg-white text-black flex flex-col  rounded-[20px] overflow-hidden">
            <div className="flex justify-center space-x-2 items-center  text-2xl bg-black text-white rounded-[20px] h-24">
              <span>
                <Image
                  src={'/assets/images/calendar.svg'}
                  alt="instagram logo"
                  width={48}
                  height={48}
                  className="w-6 h-6  lg:w-10 lg:h-10"
                />
              </span>
              <h1>Mis reservas </h1>
            </div>
            <Link href={'/'}>
              <p className="text-lg mb-2 text-left ml-6 hover:underline hover:text-red-400">
                Reservas actuales
              </p>
            </Link>
            <Link href={'/'}>
              <p className="text-lg mb-2 text-left ml-6 hover:underline hover:text-red-400">
                Historial de reservas
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Profile;
