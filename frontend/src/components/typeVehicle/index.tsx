type Props = {};
export const TypesVehicle = (props: Props) => {
  return (
    <section className="px-32">
      <h2 className="text-xl my-12 font-bold  ">
        ¿QUÉ TIPO DE VEHÍCULO NECESITAS PARA TU MUDANZA?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className=" h-[400px] bg-myBlue-300">Card1</div>
        <div className=" h-[400px] bg-myBlue-300">Card2</div>
        <div className=" h-[400px] bg-myBlue-300">Card3</div>
      </div>
    </section>
  );
};
