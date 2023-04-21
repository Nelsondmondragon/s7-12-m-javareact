import * as Yup from 'yup';
const regex = /^([0-9]{4}-){3}[0-9]{4}$|^([0-9]{4} ){3}[0-9]{4}$|^[0-9]{16}$/;

export const Schema = Yup.object().shape({
  fullName: Yup.string().nullable(),
  cvv: Yup.string().nullable(),
  date_expiration: Yup.string().nullable(),
  numberCard: Yup.string()
    .length(16, 'debe tener 16 digitos')
    .matches(regex, 'Tarjeta de Credito no valida')
    .nullable(),
});
