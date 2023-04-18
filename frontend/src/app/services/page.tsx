'use client';

import { useEffect, useState } from 'react';
import Services2 from './services2';
import Services1 from './services1';
import Services3 from './services3';

const Services = () => {
  const [servicio, setRegistro] = useState(0);

  const [datos, setDatos] = useState({});

  const pasos = (paso) => {
    setRegistro(paso);
  };


  if (servicio === 0) {
    return (
      <Services1 pasos={pasos}/>
    );
  } else if (servicio === 1) {
    return (
      <Services2 />
    );
  } else if(servicio === 2){
    return (
        <Services3 />
    );
  }
};
export default Services;