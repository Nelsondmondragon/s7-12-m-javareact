import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema as schema } from './formValidation';

import {
  CardNumberElement,
  useElements,
  useStripe,
  CardCvcElement,
  CardExpiryElement,
} from '@stripe/react-stripe-js';

import { SubmitButton } from './SubmitButton';
import { ErrorMessage } from './ErrorMessage';
import createBooking from '@/lib/createBooking';

type FormValues = {
  name: string;
  card_number: string;
  expiration_date: string;
  cvv: string;
};

type Props = {};

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      fontSize: '18px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
      '::placeholder': {
        color: '#A3A3A3',
      },
    },
    invalid: {
      iconColor: '#FF170A',
      color: '#FF170A',
    },
  },
};

const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '18px',
      color: '#03649B',
      letterSpacing: '0.025em',
      '::placeholder': {
        color: '#A3A3A3',
      },
    },
    invalid: {
      color: '#FF170A',
    },
  },
};

export const FormStripe = ({ timer }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  // const [paymentMethod, setPaymentMethod] = useState(null);

  const {
    register,
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
    if (!stripe || !elements) {
      return;
    }
    const card = await elements.getElement(CardNumberElement);

    if (card == null) {
      return;
    }

    if (error) {
      card.focus();
      return;
    }

    if (cardComplete) {
      setProcessing(true);
    }

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card,
      billing_details: { email: 'maria@correo.com', name: 'Maria Movear' },
    });

    setProcessing(false);

    if (payload.error) {
      setError(payload.error);
    } else {
      console.log(
        'resultado de payload',
        payload.paymentMethod.id,
        payload.paymentMethod.billing_details
      );
      //------ Llamada al backend stripe server
      const { id } = payload.paymentMethod;
      const dataPurchase = {
        id,
        email: 'maria@correo.com',
        name: 'Maria Movear',
        amount: 9500,
        description: 'Reserva de Vehículo',
      };
      const response = await fetch(
        'https://srtipe-server.vercel.app/checkout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataPurchase),
        }
      );
      const result = await response.json();
      console.log(result);
      //------
      if (result.status === 'bad') {
        setError({ message: 'Tarjeta Rechazada' });
        console.log(result.message.code);
      } else {
        // setPaymentMethod(payload.paymentMethod);
        const { token } = JSON.parse(localStorage.getItem('token'));
        const { id: idcar } = JSON.parse(localStorage.getItem('carSelected'));
        const { id } = JSON.parse(localStorage.getItem('user'));
        const creatBooking = await createBooking(token, idcar, id);
        timer();
      }
    }
  };

  return (
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
            <CardNumberElement
              className={`bg-white px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                errors.name
                  ? 'outline-2 outline-red-500 border-2 border-red-500'
                  : ''
              } `}
              options={CARD_OPTIONS}
              onChange={(e) => {
                setError(e.error);
                setCardComplete(e.complete);
              }}
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
              <CardExpiryElement
                className={`bg-white w-1/2 px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                  errors.name
                    ? 'outline-2 outline-red-500 border-2 border-red-500'
                    : ''
                } `}
                options={ELEMENT_OPTIONS}
                onChange={(e) => {
                  setError(e.error);
                  setCardComplete(e.complete);
                }}
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

              <CardCvcElement
                className={`bg-white w-1/ 2 px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                  errors.name
                    ? 'outline-2 outline-red-500 border-2 border-red-500'
                    : ''
                } `}
                options={ELEMENT_OPTIONS}
                onChange={(e, value) => {
                  console.log('value =', e.target);
                  setError(e.error);
                  setCardComplete(e.complete);
                }}
              />

              <p className="text-red-600 text-xs font-bold">
                {errors?.cvv?.message}
              </p>
              <p className="text-sm md:text-base lg:text-lg text-neutral-600 italic">
                CVV
              </p>
            </div>
          </div>

          {error && (
            <div className="text-base">
              <ErrorMessage>{error.message}</ErrorMessage>
            </div>
          )}
        </div>

        <div className="flex justify-center md:justify-between pt-11">
          <button
            className=" hidden md:block py-2 px-7 mt-4 w-48 bg-white text-base text-primary-600 rounded-[10px] justify-self-end font-semibold"
            type="button"
            onClick={() => router.back()}
          >
            Volver
          </button>

          <SubmitButton
            processing={processing}
            error={error}
            disabled={!stripe}
          >
            Finalizar registro
          </SubmitButton>
        </div>
      </form>
    </section>
  );
};
