import * as Yup from 'yup';

export const Schema = Yup.object().shape({
  fullName: Yup.string().required('Requerido'),
  idLocation: Yup.string().required('Requerido'),
  address: Yup.string().required('Requerido'),
  dni: Yup.string().required('Requerido'),
  numberLicence: Yup.string().required('Requerido'),
  dateExpiration: Yup.date()
    // .min(moment().add(1, 'day'), 'La fecha debe ser mayor que hoy')
    .required('La fecha es requerida'),
});
