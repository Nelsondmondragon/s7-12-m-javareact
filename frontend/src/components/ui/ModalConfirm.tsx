import React from "react";
import Box from "./Box";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useRouter } from "next/navigation";

const ModalConfirm = () => {
  const router = useRouter();

const onReservaConfirm = () => {
  router.push(`/confirmed`)
}

const onGoHome = () => {
  router.push(`/`)
}

  return (
    <Box>
      <div className="flex justify-end">
        {/* <p className=" text-4xl cursor-pointer mb-2">X</p> */}
      </div>
      <div className="flex flex-col gap-6 md:gap-16  h-full">
        <div>
          <h3 className=" text-center text-[18px] md:text-[29px] font-semibold mb-2">
            ¡Felicitaciones!
          </h3>
          <p className=" text-[16px] md:text-[27px] text-center ">
            Tu reserva fue realizada con exito
          </p>
        </div>
        <div className=" text-[120px] md:text-[150px] mx-auto text-[#0484CD]">
          <IoIosCheckmarkCircleOutline />
        </div>
        <div className="flex justify-center gap-10">
          <button className=" bg-white w-[130px] h-[35px] md:w-[167px] md:h-[47px] rounded-xl text-primary-600 text-[16px] "
          onClick={onGoHome}>
            Volver al Inicio
          </button>

          <button className="bg-primary-600 w-[130px] h-[35px] md:w-[167px] md:h-[47px] rounded-xl text-white text-[16px] "
          onClick={onReservaConfirm}>
            Ver Reserva
          </button>
        </div>
      </div>
    </Box>
  );
};

export default ModalConfirm;
