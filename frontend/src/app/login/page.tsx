'use client';
import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './login.module.css';
import { Schema as schema } from './loginValidation';
import { CustomButton } from '@/components/common/CustomButton';

type FormValues = {
  password: string;
  email: string;
};

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const LoginUser = async (values: FormValues) => {
    console.log(values);
  };

  const onSubmit = (values: FormValues) => {
    LoginUser(values);
  };

  return (
    <section className={styles.section}>
      <article className={styles.card}>
        <div className={styles.msgs}>
          <h1 className={styles.title}>Gracias por volver</h1>
        </div>
        <div className={styles.body}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form__field}>
              <label htmlFor="email">Email</label>
              <input {...register('email')} placeholder="usuario@correo.com" />
              <p className="text-red-600 text-sm font-bold">
                {errors?.email?.message}
              </p>
            </div>

            <div className={styles.form__field}>
              <label htmlFor="password">Clave</label>
              <input {...register('password')} placeholder="Clave" />
              <p className="text-red-600 text-sm font-bold">
                {errors?.password?.message}
              </p>
            </div>

            <CustomButton
              type={'Primary'}
              text={'Ingresar'}
              onClick={() => console.log('hizo click')}
              bgColor="#ff0000"
              txColor="#ffffff"
            />
          </form>
        </div>
      </article>
    </section>
  );
};

export default Login;
