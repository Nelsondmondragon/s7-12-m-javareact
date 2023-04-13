import * as Yup from 'yup';

export const Schema = Yup.object().shape({
  firstName: Yup.string().required('Requerido'),
  lastName: Yup.string().required('Requerido'),
  city: Yup.string().required('Requerido'),
  address: Yup.string().required('Requerido'),
  dni: Yup.string().required('Requerido'),
  licence: Yup.string().required('Requerido'),
  licenceDate: Yup.string().required('Requerido'),
});
