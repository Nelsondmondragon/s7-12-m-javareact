"use client";
import { useState } from "react";
import cars from "../../../cars.json";

const page = ({ params }) => {
  const [first, setfirst] = useState();

  const getCars = () => {
    const result = cars.filter((vh) => vh.categoria === params.id);

    return result.map((res) => (
      <div
        key={res.id}
        className=" w-[80%] mt-5 flex justify-between items-center gap-4 border p-4 rounded-md"
      >
        <div className="">
          <img src={res.image} alt="" width="200px" />
          <p className=" text-xl text-center">{params.id}</p>
        </div>
        <div>
          <p>
            {" "}
            <b className=" text-lg">Marca:</b> {res.title}
          </p>
          <p>
            {" "}
            <b>Pasajeros: </b> {res.passengers}
          </p>
          <p>
            <b> Capacidad:</b> {res.capacity}
          </p>
          <p>
            {" "}
            <b> Total: </b> $ 1150
          </p>
        </div>
        <div>
          <button className=" bg-blue-800 text-white px-3 rounded-md w-36 h-8">
            Reservar
          </button>
        </div>
      </div>
    ));
  };

  getCars();

  return (
    <div className=" h-screen">
      <h1 className=" text-3xl">Categoria {params.id} disponibles: </h1>
      <div className="w-full flex justify-center">{getCars()}</div>
    </div>
  );
};

export default page;
