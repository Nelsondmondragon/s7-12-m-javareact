import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <Link href="/" className="text-xl font-title text-blue-500 md:text-2xl">
        Rent-A-Truck
      </Link>

      <nav>
        <button
          className="hover:text-blue-600 md:hidden"
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
            <a href="/#section1">Section 1</a>
          </li>
          <li className="headerLink">
            <a href="/#section2">Section 2</a>
          </li>
          <li className="headerLink">
            <Link href="/booking">Reservas</Link>
          </li>
          <li className="headerLink">
            <Link href="/quotes">Cotizaciones</Link>
          </li>
          <li className="headerLink">
            <Link href="/conditions">Condiciones</Link>
          </li>
          <li className="headerLink">
            <Link href="/services">Servicios</Link>
          </li>
          <li className="headerLink">
            <Link href="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
