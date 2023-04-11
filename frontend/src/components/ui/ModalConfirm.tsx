import React from "react";
import Box from "./Box";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const ModalConfirm = () => {
  return (
    <Box>
      <div className="flex justify-end">
        <p className=" text-4xl cursor-pointer mb-2">X</p>
      </div>
      <div className="flex flex-col gap-10 h-full">
        <div>
          <h3 className=" text-center text-[29px] font-semibold mb-2">
            ¡Felicitaciones!
          </h3>
          <p className=" text-[23px] text-center ">
            Tu reserva fue realizada con exito
          </p>
        </div>
        <div className=" text-[150px] mx-auto text-[#0484CD]">
          <IoIosCheckmarkCircleOutline />
        </div>
        <div className="flex justify-center gap-10">
          <button className=" bg-white w-[167px] h-[47px] rounded-xl text-primary-600 text-[23px] ">
            Volver al Inicio
          </button>

          <button className="bg-primary-600 w-[167px] h-[47px] rounded-xl text-white text-[23px] ">
            Ver Reserva
          </button>
        </div>
      </div>
    </Box>
  );
};

export default ModalConfirm;
