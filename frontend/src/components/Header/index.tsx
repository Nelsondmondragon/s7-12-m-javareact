import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import Cookies from 'js-cookie';

import logo from '../../../public/assets/images/logo.png';
import { ModalLogin } from '../login/ModalLogin';
import {
  openModalLogin,
  removeUser,
  selectCurrentUser,
} from '@/features/users/userSlice';

const links = [
  { label: 'Inicio', route: '/' },
  { label: 'Vehículos', route: '/' },
  { label: 'Reserva', route: '/booking' },
  { label: 'Servicios', route: '/services' },
  { label: 'Nosotros', route: '/about' },
  { label: 'Contacto', route: '/contact' },
];

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleShowToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const logout = () => {
    dispatch(removeUser());
    Cookies.remove('token');
    sessionStorage.removeItem('token');
    localStorage.removeItem('token');
    router.push('/about');
  };

  const handleProfile = () => {
    currentUser.name !== '' ? logout() : dispatch(openModalLogin());
  };

  return (
    <>
      <header>
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
            className="w-[60px] h-[60px] md:ml-12 bg-primary-200 hover:bg-primary-300 rounded-full"
            onClick={handleProfile}
          >
            {currentUser.name !== '' ? (
              <p>{currentUser.name[0].toUpperCase()}</p>
            ) : (
              <p> Login</p>
            )}
          </button>

          <button
            className="hover:text-primary-200 md:hidden ml-4"
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
            {links.map((link) => {
              return (
                <li className="headerLink" key={link.label}>
                  <Link href={link.route}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {currentUser.name === '' && <ModalLogin />}
    </>
  );
};
