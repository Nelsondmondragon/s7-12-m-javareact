type Props = {};
export const Requirement = (props: Props) => {
  return (
    <section className="px-32">
      <h2 className="text-xl my-12 font-bold  ">
        ¿CUÁLES SON LOS REQUISITOS PARA RENTAR UN VEHÍCULO?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className=" h-[400px] bg-myBlue-500">Card1</div>
        <div className=" h-[400px] bg-myBlue-500">Card2</div>
        <div className=" h-[400px] bg-myBlue-500">Card3</div>
        <div className=" h-[400px] bg-myBlue-500">Card4</div>
      </div>
    </section>
  );
};
