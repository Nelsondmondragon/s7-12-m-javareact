import React from "react";
import Box from "./Box";
import Loader from "./Loader";

const ModalLoading = () => {
  return (
    <Box>
      <div className="flex flex-col justify-evenly md:justify-center gap-5 h-full">
        <p className="text-[18px] md:text-[28px] lg:text-[32px] text-center">
          Aguarda unos segundos mientras confirmamos la reserva.
        </p>
        <Loader />
      </div>
    </Box>
  );
};

export default ModalLoading;
