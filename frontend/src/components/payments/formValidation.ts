import * as Yup from 'yup';

export const Schema = Yup.object().shape({
  name: Yup.string().required('Requerido'),
});
