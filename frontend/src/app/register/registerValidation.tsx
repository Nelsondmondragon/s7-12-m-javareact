import * as Yup from 'yup';

export const Schema = Yup.object().shape({
    name: Yup.string()
        .required('Requerido'),
    lastname: Yup.string()
        .required('Requerido'),
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
    repeatPassword: Yup.string()
        .min(3, 'Debe tener más de 3 letras')
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir'),
});
