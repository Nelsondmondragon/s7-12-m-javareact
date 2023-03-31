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
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema as schema } from '../login/loginValidation';

type FormValues = {
  password: string;
  email: string;
};

type Props = {
  text: string;
  type?: 'Primary' | 'Secondary' | 'Link';
  bgColor?: string; //color
  txColor?: string;
  icon?: string;
  onClick: () => void;
};

export const CustomInput = ({
  onClick,
  text,
  type = 'Primary',
  bgColor,
  txColor,
  icon,
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
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
      <div className="w-full relative py-0 px-4 mx-auto mb-4 flex flex-col">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          {...register('email')}
          placeholder="usuario@correo.com"
          className="p-2 rounded-lg "
        />
        <p className="text-red-600 text-sm font-bold">
          {errors?.email?.message}
        </p>
      </div>{' '}
    </>
  );
};
