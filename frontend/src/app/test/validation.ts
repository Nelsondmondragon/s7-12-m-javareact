import * as Yup from 'yup';

export const Schema = Yup.object().shape({
  fullName: Yup.string().required('Requerido'),
  idLocation: Yup.string().required('Requerido'),
  address: Yup.string().required('Requerido'),
  dni: Yup.string().required('Requerido'),
  numberLicence: Yup.string().required('Requerido'),
  dateExpiration: Yup.string().required('Requerido'),
});
