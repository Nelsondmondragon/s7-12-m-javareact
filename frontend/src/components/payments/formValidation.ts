import * as Yup from 'yup';
const regex = /^([0-9]{4}-){3}[0-9]{4}$|^([0-9]{4} ){3}[0-9]{4}$|^[0-9]{16}$/;

export const Schema = Yup.object().shape({
  name: Yup.string().nullable(),
  cvv: Yup.string().nullable(),
  expiration_date: Yup.string().nullable(),
  card_number: Yup.string()
    .matches(regex, 'Tarjeta de Credito no valida')
    .nullable(),
});
