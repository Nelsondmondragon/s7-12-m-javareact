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
import ModalSuccess from './ModalSuccess';
import verifyCreditCard from '@/lib/verifyCreditCard';
import { useEffect, useState } from 'react';
import getCard from '@/lib/getCard';
import updateCard from '@/lib/updateCard';
import createCard from '@/lib/createCard';

type FormValues = {
  fullName: string;
  numberCard: string;
  date_expiration: string;
  cvv: string;
};

type Props = {};

export const FormCreditCard = (props: Props) => {
  const currentUser: User = useSelector(selectCurrentUser);
  const [test, setTest] = useState(currentUser?.card);
  const showModalRegisterSucces = useSelector(selectShowModalRegisterSuccess);
  const [hasCreditCard, setHasCredictCard] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const token =
    typeof window !== 'undefined' && localStorage.getItem('token')
      ? JSON.parse(localStorage.getItem('token'))
      : '';

  const getCreditCard = async () => {
    if (currentUser.id !== 0) {
      const verify = await verifyCreditCard({
        id: currentUser.id,
        token,
      });

      setHasCredictCard(verify);

      if (verify) {
        const creditCardData = await getCard({
          id: currentUser.id,
          token,
        });
        const updateData = { ...currentUser, card: creditCardData };
        dispatch(setUser(updateData));
      }
    }
  };

  useEffect(() => {
    getCreditCard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      numberCard: test?.numberCard,
      fullName: test?.fullName,
      date_expiration: test?.date_expiration,
      cvv: test?.cvv,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: FormValues) => {
    const card = {
      numberCard: values.numberCard,
      fullName: values.fullName,
      date_expiration: values.date_expiration,
      cvv: values.cvv,
    };
    const newUser = {
      ...currentUser,
      card,
    };

    if (currentUser.id === 0) {
      /*
        register new user / customer
        - Contact data
        - credit card data
      */
      const registerResult = postRegister(newUser);
      const result = await registerResult;
      if (!result.token) {
        dispatch(openModalLoginError());
        return;
      }

      Cookies.set('token', result.token);
      localStorage.setItem('token', JSON.stringify(result));
      localStorage.setItem('user', JSON.stringify(newUser));
      dispatch(setUser(newUser));
      dispatch(openModalRegisterSuccess());
      reset();
    } else {
      /*
        update user / customer
        - credit card data
      */
      const data = { card, token: token.token, id: currentUser.id };
      if (hasCreditCard) {
        const res = await updateCard(data);
      } else {
        const res = await createCard(data);
      }
    }
    router.push('/profile');
  };

  return (
    <>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full bg-neutral-100 rounded-[20px] text-xl px-2 md:px-8 py-5">
            <div className="relative py-0  mx-auto mb-4 flex flex-col">
              <label htmlFor="fullName" className=" mr-2">
                Nombre y apellido
              </label>
              <input
                {...register('fullName')}
                placeholder="Nombre y apellido"
                className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                  errors.fullName
                    ? 'outline-2 outline-red-500 border-2 border-red-500'
                    : ''
                } `}
              />
              <p className="text-red-600 text-xs font-bold">
                {errors?.fullName?.message}
              </p>
              <p className="text-sm md:text-base lg:text-lg text-neutral-600 italic">
                Ingrese los datos tal como figuran en la tarjeta
              </p>
            </div>

            <div className="relative py-0  mx-auto mb-4 flex flex-col">
              <label htmlFor="numberCard" className=" mr-2">
                N° Tarjeta
              </label>
              <input
                {...register('numberCard')}
                placeholder="Numero de la tarjeta"
                className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                  errors.numberCard
                    ? 'outline-2 outline-red-500 border-2 border-red-500'
                    : ''
                } `}
              />
              <p className="text-red-600 text-xs font-bold">
                {errors?.numberCard?.message}
              </p>
              <p className="text-sm md:text-base lg:text-lg text-neutral-600 italic">
                Ingrese los 16 números de su tarjeta
              </p>
            </div>

            <div className="flex space-x-10">
              <div className="flex-1 relative py-0  mx-auto flex flex-col">
                <label htmlFor="date_expiration">Vencimiento</label>
                <input
                  {...register('date_expiration')}
                  placeholder="MM/YY"
                  className={`w-full px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                    errors.date_expiration
                      ? 'outline-2 outline-red-500 border-2 border-red-500'
                      : ''
                  } `}
                />
                <p className="text-red-600 text-xs font-bold">
                  {errors?.date_expiration?.message}
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
