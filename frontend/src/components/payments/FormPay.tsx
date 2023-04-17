import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema as schema } from './formValidation';

import Cookies from 'js-cookie';

import {
  openModalLoginError,
  openModalRegisterSuccess,
  selectCurrentUser,
  selectShowModalRegisterSuccess,
  setUser,
} from '@/features/users/userSlice';
import postRegister from '@/lib/postRegister';
import getUser from '@/lib/getUser';
import ModalSuccess from './ModalSuccess';

type FormValues = {
  name: string;
  card_number: string;
  expiration_date: string;
  cvv: string;
};

type Props = {};

export const FormCreditCard = (props: Props) => {
  const currentUser = useSelector(selectCurrentUser);
  const showModalRegisterSucces = useSelector(selectShowModalRegisterSuccess);

  const dispatch = useDispatch();
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

  const onSubmit = async (values: FormValues) => {
    console.log('revisar parametros y variables de entorno', values);

    // se crea el estado usuario en Creación y se pasa al siguiente paso
    // actualizar datos en el localstorage y estado global
    const newUser = {
      ...currentUser,
      card: {
        card_number: values.card_number,
        name: values.name,
        expiration_date: values.expiration_date,
        cvv: values.cvv,
      },
    };
    dispatch(setUser(newUser));

    const registerResult = postRegister(newUser);
    const result = await registerResult;

    if (!result.token) {
      dispatch(openModalLoginError());
      return;
    }

    const getUserData = getUser(result.token);
    const userData = await getUserData;
    localStorage.setItem('token', JSON.stringify(result));
    Cookies.set('token', result.token);

    console.log(userData);

    dispatch(setUser(userData));
    localStorage.setItem('user', JSON.stringify(userData));
    reset();
    dispatch(openModalRegisterSuccess());
  };

  return (
    <>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full bg-neutral-100 rounded-[20px] text-xl px-2 md:px-8 py-5">
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
          </div>
          <div className="flex justify-center md:justify-between pt-11">
            <button
              className=" hidden md:block py-2 px-7 mt-4 w-48 bg-white text-base text-primary-600 rounded-[10px] justify-self-end font-semibold"
              type="button"
              onClick={() => router.back()}
            >
              Volver
            </button>

            <button
              className="py-2 px-7 mt-4 w-48 bg-primary-600 text-base text-primary-50 font-semibold rounded-[10px] self-end"
              type="submit"
            >
              Finalizar registro
            </button>
          </div>
        </form>
      </section>
      {showModalRegisterSucces && <ModalSuccess />}
    </>
  );
};
