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
  dispatch(openModalLogin());
}

const onRegister = () => {
  router.push(`/register`);
}
  

  return (
    <Box>
      <div className="flex justify-end">
        <p className=" text-4xl cursor-pointer mb-2" onClick={()=>setShowModal(false)}>X</p>
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
          <button className=" bg-white w-[342px] h-[67px] rounded-xl text-primary-600 text-[23px] font-semibold mx-auto"
          onClick={onLogin}>
            Iniciar Sesion
          </button>
          <p className="text-[23px]">¿aun no tienes una cuenta?</p>
          <button className="bg-primary-600 w-[342px] h-[67px] rounded-xl text-white text-[23px] font-semibold"
          onClick={onRegister}>
            Registrarme
          </button>
        </div>
      </div>
    </Box>
  );
};

export default ModalInicio;
