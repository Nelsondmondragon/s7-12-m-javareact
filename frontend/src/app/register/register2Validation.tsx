import * as Yup from 'yup';

export const Schema = Yup.object().shape({
    firstName: Yup.string()
        .required('Requerido'),
    lastName: Yup.string()
        .required('Requerido'),
    email: Yup.string()
        .email('Email invalido')
        .typeError('Email invalido')
        .required('Requerido'),
    city: Yup.string()
        .required('Requerido'),
    adress: Yup.string()
        .required('Requerido'),


});