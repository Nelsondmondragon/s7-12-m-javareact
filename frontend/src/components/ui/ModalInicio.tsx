import React from "react";
import Box from "./Box";
import { useDispatch } from "react-redux";
import { openModalLogin } from "@/features/users/userSlice";
import { useRouter } from "next/navigation";

const ModalInicio = ({setShowModal}) => {
  const router = useRouter();
  const dispatch = useDispatch();

const onLogin = ()=> {
  setShowModal(false)
  router.push(`/login`);
  //dispatch(openModalLogin());
}

const onRegister = () => {
  router.push(`/register`);
}
  

  return (
    <Box>
      <div className="flex justify-end">
        <p className=" text-2xl md:text-3xl cursor-pointer mb-2" onClick={()=>setShowModal(false)}>X</p>
      </div>
      <div className="flex flex-col gap-5 md:gap-16 h-full">
        <div>
          <h3 className=" text-center text-[23px] md:text-[29px] font-semibold mb-2">
            Gracias por elegirnos!
          </h3>
          <p className=" text-[16px] md:text-[23px] text-center ">
            Para continuar con la reserva, inicia sesión con tu correo
            electrónico{" "}
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <button className=" bg-white w-[167px] h-[39px] md:w-[342px] md:h-[67px] rounded-xl text-primary-600 text-[16px] md:text-[23px] font-semibold mx-auto"
          onClick={onLogin}>
            Iniciar Sesion
          </button>
          <p className="text-[16px]">¿aun no tienes una cuenta?</p>
          <button className="bg-primary-600 w-[167px] h-[39px] md:w-[342px] md:h-[67px]  rounded-xl text-white text-[16px] md:text-[23px] font-semibold"
          onClick={onRegister}>
            Registrarme
          </button>
        </div>
      </div>
    </Box>
  );
};

export default ModalInicio;
