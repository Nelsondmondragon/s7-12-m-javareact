import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema as schema } from './formValidation';

type FormValues = {
  name: string;
  card_number: string;
  expiration_date: string;
  cvv: string;
};

type Props = {};

export const FormCreditCard = (props: Props) => {
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      card_number: '',
      name: '',
      expiration_date: '',
      cvv: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: FormValues) => {
    console.log('revisar parametros y variables de entorno', values);
    alert('revisar parametros y variables de entorno');

    router.push('/profile');
  };

  return (
    <section>
      <div className="w-full bg-neutral-100 rounded-[20px] text-xl px-2 md:px-8 py-5">
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <p className="text-sm md:text-base lg:text-lg text-neutral-600 italic">
              Ingrese los datos tal como figuran en la tarjeta
            </p>
          </div>

          <div className="relative py-0  mx-auto mb-4 flex flex-col">
            <label htmlFor="card_number" className=" mr-2">
              N° Tarjeta
            </label>
            <input
              {...register('card_number')}
              placeholder="Numero de la tarjeta"
              className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                errors.card_number
                  ? 'outline-2 outline-red-500 border-2 border-red-500'
                  : ''
              } `}
            />
            <p className="text-red-600 text-xs font-bold">
              {errors?.card_number?.message}
            </p>
            <p className="text-sm md:text-base lg:text-lg text-neutral-600 italic">
              Ingrese los 16 números de su tarjeta
            </p>
          </div>

          <div className="flex space-x-10">
            <div className="flex-1 relative py-0  mx-auto flex flex-col">
              <label htmlFor="card_number">Vencimiento</label>
              <input
                {...register('expiration_date')}
                placeholder="MM/YY"
                className={`w-full px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                  errors.expiration_date
                    ? 'outline-2 outline-red-500 border-2 border-red-500'
                    : ''
                } `}
              />
              <p className="text-red-600 text-xs font-bold">
                {errors?.expiration_date?.message}
              </p>
              <p className="text-sm md:text-base lg:text-lg text-neutral-600 italic">
                MM/YY
              </p>
            </div>

            <div className="flex-1 relative py-0  mx-auto flex flex-col">
              <label htmlFor="cvv">CVV</label>
              <input
                {...register('cvv')}
                placeholder="CVV"
                className={`w-full px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                  errors.cvv
                    ? 'outline-2 outline-red-500 border-2 border-red-500'
                    : ''
                } `}
              />
              <p className="text-red-600 text-xs font-bold">
                {errors?.cvv?.message}
              </p>
              <p className="text-sm md:text-base lg:text-lg text-neutral-600 italic">
                CVV
              </p>
            </div>
          </div>
          <div className="mx-auto my-4 text-center">
            <button className="btn btnSecond px-12"> Enviar</button>
          </div>
        </form>
      </div>
    </section>
  );
};
