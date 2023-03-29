/*
 * Componente para renderizar botones que ocupa el 90% del ancho del padre:
 * Props: type Primary   : Relleno por defecto azul y letras blancas
 *             Secondary : Sin relleno con el borde defecto azul y letras azul
 *             Link      : Sin relleno y sin bordes letras por defecto azul
 *        bgColor: opcional para el color del borde o del relleno
 *        txColor: opcional para el color del texto
 *        icon: opcional nombre del icon en FontAwesome @expo/vector-icon
 *        onPress: () => void
 */

type Props = {
  text: string;
  type?: 'Primary' | 'Secondary' | 'Link';
  bgColor?: string; //color
  txColor?: string;
  icon?: string;
  onClick: () => void;
};

export const CustomButton = ({
  onClick,
  text,
  type = 'Primary',
  bgColor,
  txColor,
  icon,
}: Props) => {
  const bg =
    type === 'Primary'
      ? bgColor
        ? `bg-${bgColor}`
        : `bg-primary`
      : type === 'Secondary'
      ? bgColor
        ? `bg-transparent border-${bgColor}`
        : `backgroundColor: "transparent", borderColor: COLORS.primary`
      : `{ backgroundColor: "transparent" }`;

  const tx =
    type === 'Primary'
      ? txColor
        ? `{ color: txColor }`
        : `{ color: 'white' }`
      : txColor
      ? `{ color: txColor }`
      : `{ color: COLORS.primary }`;

  return (
    <>
      <button className={`w-[90%] px-1 py-4 rounded-md hover:bg-blue-500`}>
        {text}
      </button>
    </>
  );
};
