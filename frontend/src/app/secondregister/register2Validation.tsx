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
    city: Yup.string()
        .required('Requerido'),
    adress: Yup.string()
        .required('Requerido'),
    dni: Yup.string()
        .required('Requerido'),
    licence: Yup.string()
        .required('Requerido')

});