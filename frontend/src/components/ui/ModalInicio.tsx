import React from "react";
import Box from "./Box";

const ModalInicio = () => {
  return (
    <Box>
      <div className="flex justify-end">
        <p className=" text-4xl cursor-pointer mb-2">X</p>
      </div>
      <div className="flex flex-col gap-14 h-full">
        <div>
          <h3 className=" text-center text-[29px] font-semibold mb-2">
            Gracias por elegirnos!
          </h3>
          <p className=" text-[23px] text-center ">
            Para continuar con la reserva, inicia sesión con tu correo
            electrónico{" "}
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <button className=" bg-white w-[342px] h-[67px] rounded-xl text-primary-600 text-[23px] font-semibold mx-auto">
            Iniciar Sesion
          </button>
          <p className="text-[23px]">¿aun no tienes una cuenta?</p>
          <button className="bg-primary-600 w-[342px] h-[67px] rounded-xl text-white text-[23px] font-semibold">
            Registrarme
          </button>
        </div>
      </div>
    </Box>
  );
};

export default ModalInicio;
