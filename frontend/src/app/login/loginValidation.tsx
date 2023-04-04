import * as Yup from 'yup';

export const Schema = Yup.object().shape({
  email: Yup.string()
    .email('Email invalido')
    .typeError('Email invalido')
    .required('Requerido'),
  password: Yup.string()
    .min(3, 'Debe tener más de 3 letras')
    .required('Required'),
});
