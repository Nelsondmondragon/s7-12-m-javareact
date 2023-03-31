import { useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

import logo from '../../../public/assets/images/logo.png';
import { ModalLogin } from '../login/ModalLogin';
import { selectCurrentUser } from '@/features/users/userSlice';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const [isModalLoginVisible, setIsModalLoginVisible] = useState(false);

  const handleShowToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleProfile = () => {
    currentUser.name !== ''
      ? console.log('ir al profile')
      : setIsModalLoginVisible(true);
  };

  return (
    <>
      <header className="bg-myBlue-500 px-[30]">
        <Link href="/">
          <div className="flex items-center">
            <div className="h-[60px] w-[91px] mr-[30px]">
              <Image src={logo} alt="Logo" className="w-full h-full" />
            </div>
            <div className="font-bold text-sm">
              <p>{'"Mudarse nunca'}</p>
              <p>{'fue tan facil"'}</p>
            </div>
          </div>
        </Link>

        <nav className="flex md:flex-row-reverse justify-between items-center">
          <button
            className="w-[60px] h-[60px] md:ml-12 bg-myBlue-100 hover:bg-myBlue-300 rounded-full"
            onClick={handleProfile}
          >
            {currentUser.name !== '' ? (
              <p>{currentUser.name[0].toUpperCase()}</p>
            ) : (
              <p> Login</p>
            )}
          </button>

          <button
            className="hover:text-myBlue-300 md:hidden ml-4"
            onClick={handleShowToggleMenu}
          >
            {!showMenu ? <FaBars size={24} /> : <FaTimes size={24} />}
          </button>
          <ul
            onClick={handleShowToggleMenu}
            className={`menuMobile ${
              showMenu ? ' translate-x-0 ' : 'translate-x-full'
            } md:menuDesktop`}
          >
            <li className="headerLink">
              <Link href="/booking">Vehículos</Link>
            </li>
            <li className="headerLink">
              <Link href="/services">Servicios</Link>
            </li>
            <li className="headerLink">
              <Link href="/about">Nosotros</Link>
            </li>
            <li className="headerLink">
              <Link href="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
      {currentUser.name === '' && (
        <ModalLogin
          isVisible={isModalLoginVisible}
          setIsVisible={setIsModalLoginVisible}
        />
      )}
    </>
  );
};
