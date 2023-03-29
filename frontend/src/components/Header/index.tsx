import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

import logo from '../../../public/assets/images/logo.png';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
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

      <nav>
        <button
          className="hover:text-myBlue-300 md:hidden"
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
            <Link href="/quotes">Servicios</Link>
          </li>
          <li className="headerLink">
            <Link href="/conditions">Nosotros</Link>
          </li>
          <li className="headerLink">
            <Link href="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
