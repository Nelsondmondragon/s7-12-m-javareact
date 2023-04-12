'use client';
import Image from 'next/image';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema as schema } from './formValidation';

import emailjs from '@emailjs/browser';
import { useState } from 'react';

type FormValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: FormValues) => {
    alert('revisar parametros y variables de entorno');
    reset();
    // setIsSending(true);
    // emailjs
    //   .send(
    //     process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
    //     process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
    //     values,
    //     process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
    //   )
    //   .then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //       setIsSending(false);
    //       reset();
    //     },
    //     (err) => {
    //       console.log('FAILED...', err);
    //       setIsSending(false);
    //     }
    //   );
  };

  return (
    <section className="bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-top px-2 py-2 md:px-4 md:py-4 lg:px-12 lg:py-12">
      <div className="max-w-5xl bg-white bg-opacity-50 md:px-10 lg:px-8 py-4 mx-auto mb-8 rounded-[20px] text-primary-700 text-lg">
        <h1 className="text-base md:text-4xl font-semibold text-center pt-4">
          Contáctenos
        </h1>
        <p className="mb-4">
          Escribenos y una de nuestras ejecutivas especializadas se contactará
          contigo a la brevedad posible.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div>
              <div className="relative py-0  mx-auto mb-4 flex flex-col">
                <input
                  {...register('name')}
                  placeholder="Nombre  y Apellidos"
                  className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                    errors.name
                      ? 'outline-2 outline-red-500 border-2 border-red-500'
                      : ''
                  } `}
                />
                <p className="text-red-600 text-xs font-bold">
                  {errors?.name?.message}
                </p>
              </div>
              <div className="relative py-0  mx-auto mb-4 flex flex-col">
                <input
                  {...register('phone')}
                  placeholder="Teléfono"
                  className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                    errors.phone
                      ? 'outline-2 outline-red-500 border-2 border-red-500'
                      : ''
                  } `}
                />
                <p className="text-red-600 text-xs font-bold">
                  {errors?.phone?.message}
                </p>
              </div>
              <div className="relative py-0  mx-auto mb-4 flex flex-col">
                <input
                  {...register('email')}
                  placeholder="Email"
                  className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                    errors.email
                      ? 'outline-2 outline-red-500 border-2 border-red-500'
                      : ''
                  } `}
                />
                <p className="text-red-600 text-xs font-bold">
                  {errors?.email?.message}
                </p>
              </div>
            </div>
            <div>
              <div className="relative py-0  mx-auto mb-4 flex flex-col">
                <textarea
                  {...register('message')}
                  placeholder="Mensaje"
                  cols={30}
                  rows={5}
                  className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                    errors.message
                      ? 'outline-2 outline-red-500 border-2 border-red-500'
                      : ''
                  } `}
                ></textarea>
                <p className="text-red-600 text-sm font-bold">
                  {errors?.message?.message}
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto text-center">
            <button className="btn btnSecond px-10"> Enviar</button>
          </div>
        </form>
      </div>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 text-primary-700 text-lg">
        <div className="grid grid-cols-1 px-10 py-4  gap-4 bg-white bg-opacity-70 rounded-[20px]">
          <p className="flex items-center">
            <span>
              <Image
                src={'/assets/images/logos/location.png'}
                alt="location icon"
                width={66}
                height={66}
                className="w-[66px] h-[66px] mr-4"
              />
            </span>
            <span>Av. Los Buenos Aires N° 2999</span>
          </p>
          <p className="flex items-center">
            <span>
              <Image
                src={'/assets/images/logos/phone.png'}
                alt="phone icon"
                width={66}
                height={66}
                className="w-[66px] h-[66px] mr-4"
              />
            </span>
            <span>+54 12 265926</span>
          </p>
        </div>
        <div className="grid grid-cols-1 px-10 py-4 gap-4 bg-white bg-opacity-70  rounded-[20px]">
          <p className="flex items-center">
            <span>
              <Image
                src={'/assets/images/logos/email.png'}
                alt="email icon"
                width={66}
                height={66}
                className="w-[66px] h-[66px] mr-4"
              />
            </span>
            <span>info@movear.com.ar</span>
          </p>
          <p className="flex items-center">
            <span>
              <Image
                src={'/assets/images/logos/whatsapp.png'}
                alt="whatsapp icon"
                width={66}
                height={66}
                className="w-[66px] h-[66px] mr-4"
              />
            </span>
            <span>+54 12 265926</span>
          </p>
        </div>
      </div>
    </section>
  );
}
