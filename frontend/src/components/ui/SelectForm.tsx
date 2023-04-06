
export const SelectForm = () => {
  return (
    <select
      type="text"
      defaultValue={"default"}
      className=" w-96"
      //   onChange={(e) => setStartPl(e.target.value)}
    >
      <option value="Buenos Aires">Buenos Aires</option>
      <option value="Córdoba">Córdoba</option>
      <option value="Entre Ríos">Entre Ríos</option>
      <option value="Santa Fé">Santa Fé</option>
    </select>
  );
};
