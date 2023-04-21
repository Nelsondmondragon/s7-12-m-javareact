'use client';
import Image from 'next/image';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema as schema } from './formValidation';

import emailjs from '@emailjs/browser';
import { useState } from 'react';

type FormValues = {
  user_name: string;
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
      user_name: '',
      phone: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: FormValues) => {
    setIsSending(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        values,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSending(false);
          alert('Gracias por su Email');
          reset();
        },
        (err) => {
          console.log('FAILED...', err);
          setIsSending(false);
        }
      );
  };

  return (
    <section className="bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-top px-2 py-2 md:px-4 md:py-4 lg:px-12 lg:py-12">
      <div className="max-w-5xl bg-white bg-opacity-50 px-2 md:px-10 lg:px-8 py-4 mx-auto mb-8 rounded-[20px] text-black text-lg">
        <h1 className="text-2xl md:text-4xl font-semibold text-center pt-4">
          Contacto
        </h1>
        <p className="mb-4">
          Déjanos tu mensaje y alguien de nuestro equipo se comunicará contigo a
          la brevedad posible
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="relative py-0  mx-auto mb-4 flex flex-col">
                <label htmlFor="user_name" className=" mr-2">
                  Nombre y Apellido
                </label>
                <input
                  {...register('user_name')}
                  placeholder="Nombre  y Apellidos"
                  className={`px-2 py-1 rounded-lg border-2 border-transparent outline-0 focus:border-2 focus:border-primary-500 ${
                    errors.user_name
                      ? 'outline-2 outline-red-500 border-2 border-red-500'
                      : ''
                  } `}
                />
                <p className="text-red-600 text-xs font-bold">
                  {errors?.user_name?.message}
                </p>
              </div>
              <div className="relative py-0  mx-auto mb-4 flex flex-col">
                <label htmlFor="name" className=" mr-2">
                  Teléfono
                </label>
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
                <label htmlFor="name" className=" mr-2">
                  Email
                </label>
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
              <div className="relative py-0  mx-auto mb-4 flex flex-col md:pt-6">
                <textarea
                  {...register('message')}
                  placeholder="Mensaje"
                  cols={30}
                  rows={7}
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
            <button className="btn btnSecond px-12"> Enviar</button>
          </div>
        </form>
      </div>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 text-black text-lg">
        <div className="grid grid-cols-1 px-2 md:px-10 py-4  gap-4 bg-white bg-opacity-70 rounded-[20px]">
          <div className="flex items-center">
            <span>
              <Image
                src={'/assets/images/logos/location.png'}
                alt="location icon"
                width={60}
                height={60}
                className="w-[60px] h-[60px] mr-2 md:mr-4"
              />
            </span>
            <div className="flex flex-col">
              <span className="text-base">Dirección</span>
              <span>Av. Los Buenos Aires N° 2999</span>
            </div>
          </div>
          <div className="flex items-center">
            <span>
              <Image
                src={'/assets/images/logos/mail.png'}
                alt="email icon"
                width={60}
                height={60}
                className="w-[60px] h-[60px] mr-2 md:mr-4"
              />
            </span>
            <div className="flex flex-col">
              <span className="text-base">Email</span>
              <span>correo@movear.com.ar</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 px-2 md:px-10 py-4  gap-4 bg-white bg-opacity-70 rounded-[20px]">
          <div className="flex items-center">
            <span>
              <Image
                src={'/assets/images/logos/whatsapp.png'}
                alt="email icon"
                width={60}
                height={60}
                className="w-[60px] h-[60px] mr-2 md:mr-4"
              />
            </span>
            <div className="flex flex-col">
              <span className="text-base">Whatsapp</span>
              <span>+54 11 1234 1234</span>
            </div>
          </div>
          <div className="flex items-center">
            <span>
              <Image
                src={'/assets/images/logos/phone.png'}
                alt="email icon"
                width={60}
                height={60}
                className="w-[60px] h-[60px] mr-2 md:mr-4"
              />
            </span>
            <div className="flex flex-col">
              <span className="text-base">Teléfono</span>
              <span>400 4321</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
