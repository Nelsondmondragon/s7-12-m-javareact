'use client';

import { useEffect, useState } from "react";
import Register1 from "./register1";
import Register2 from "./register2";

const RegisterFather = () => {
     const [registro, setRegistro] = useState(0)

     const [datos, setDatos] = useState({
    
     })
     const actualizarDatos = (nuevosDatos) => {
       
       console.log(datos)
       setDatos({...datos, ...nuevosDatos})
     }

     const pasos = (paso)=>{
         setRegistro(paso)
     }
     const caca = ()=>{
        setRegistro(1)
     }
    

    if(registro === 0){
        return <Register1 pasos={pasos} actualizarDatos={actualizarDatos}></Register1>
    } else if(registro === 1) {
        return <Register2 pasos={pasos} actualizarDatos={actualizarDatos} datos={datos}></Register2>
    }
    

  
    return (
    <div>

    </div>
        
    
  );
};
export default RegisterFather;
