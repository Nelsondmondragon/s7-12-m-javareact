import * as Yup from 'yup';

export const Schema = Yup.object().shape({
  email: Yup.string()
    .email('Email invalido')
    .typeError('Email invalido')
    .required('Requerido'),
  password: Yup.string()
    .min(8, 'La contraseña debe tener minimo 8 caracteres')
    .required('Required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/,
      'La contraseña debe tener al menos una letra mayúscula, una letra minúscula y un número'
    ),
  confirmPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden'),
});
