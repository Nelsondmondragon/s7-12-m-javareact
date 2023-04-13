import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema as schema } from './formValidation';

type FormValues = {
  card_number: string;
  name: string;
};

type Props = {};
export const FormCreditCard = (props: Props) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      card_number: '',
      name: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: FormValues) => {
    alert('revisar parametros y variables de entorno');
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[616px] h-[598px] bg-neutral-100 rounded-2xl text-[24px] px-14 py-5">
          <div className="relative py-0  mx-auto mb-4 flex flex-col">
            <label htmlFor="card_number" className=" mr-2">
              N° Tarjeta
            </label>
            <input
              {...register('card_number')}
              placeholder="Nombre  y Apellidos"
              className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                errors.card_number
                  ? 'outline-2 outline-red-500 border-2 border-red-500'
                  : ''
              } `}
            />
            <p className="text-red-600 text-xs font-bold">
              {errors?.card_number?.message}
            </p>
            <p className=" text-neutral-600 italic">
              Ingrese los 16 números de su tarjeta
            </p>
          </div>

          <div className="relative py-0  mx-auto mb-4 flex flex-col">
            <label htmlFor="name" className=" mr-2">
              Nombre y apellido
            </label>
            <input
              {...register('name')}
              placeholder="Nombre y apellido"
              className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                errors.name
                  ? 'outline-2 outline-red-500 border-2 border-red-500'
                  : ''
              } `}
            />
            <p className="text-red-600 text-xs font-bold">
              {errors?.name?.message}
            </p>
            <p className="text-neutral-600 italic">
              Ingrese los datos tal como figuran en la tarjeta
            </p>
          </div>
        </div>
        <div className="mx-auto text-center">
          <button className="btn btnSecond px-12"> Enviar</button>
        </div>
      </form>
    </section>
  );
};
