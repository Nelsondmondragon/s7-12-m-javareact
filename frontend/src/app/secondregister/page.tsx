'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import  vector  from './vector.svg'
// import { Schema as schema } from './registerValidation';

// type FormValues = {
//   name: string;
//   lastname: string;
//   password: string;
//   repeatPassword: string;
//   email: string;
// };

const Register2 = () => {
    //   const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    //   } = useForm<FormValues>({
    //     defaultValues: {
    //       name: '',
    //       lastname: '',
    //       email: '',
    //       password: '',
    //       repeatPassword: '',
    //     },
    //     resolver: yupResolver(schema),
    //   });

    //   const RegisterUser = async (values: FormValues) => {
    //     console.log(values);
    //   };

    //   const onSubmit = (values: FormValues) => {
    //     RegisterUser(values);
    //   };

    return (

        <div className='w-full '>
            <form className='px-48 py-24'>
                <div>
                    <h2 className='text-4xl pb-4' >Ya casi terminamos...</h2>
                    <div className='flex'>
                    {/* <img src={vector} /> */}
                    <p className='text-xl pb-3'>Te pediremos algunos datos mas para completar tu perfil</p>
                    </div>
                </div>
                <div className='pb-10'>
                    <div className="flex flex-col pb-2">
                        <label htmlFor="name" className='font-semibold pb-2'>Direccion</label>
                        <input className='w-2/4 rounded-md h-11 bg-slate-200 outline-none px-2 py-4' />
                        {/* <p className="text-red-600 text-sm font-bold">
              {errors?.name?.message}
            </p> */}
                    </div>
                    <div className="flex flex-col pb-2">
                        <label htmlFor="name" className='font-semibold pb-2'>DNI</label>
                        <input className='w-2/4 rounded-md h-11 bg-slate-200 outline-none px-2 py-4' />
                        {/* <p className="text-red-600 text-sm font-bold">
              {errors?.name?.message}
            </p> */}
                    </div>
                    <div className="flex flex-col pb-2">
                        <label htmlFor="name" className='font-semibold pb-2'>N° Licencia de conducir</label>
                        <input className='w-2/4 rounded-md h-11 bg-slate-200 outline-none px-2 py-4' />
                        {/* <p className="text-red-600 text-sm font-bold">
              {errors?.name?.message}
            </p> */}
                    </div>
                </div>
                <div>
                    <h2 className='text-xl pb-5'>Información de pago</h2>
                    <p className='text-xl pb-10'>Esta sección podrás completarla ahora, o mas tarde. <br /><br />
                        <b>Recorda que para realizar una reserva, deberás presentar una tarjeta de crédito a tu nombre</b>
                    </p>
                </div>
                <div className='w-3/5'>
                    <div className="flex flex-col pb-2">
                        <label htmlFor="name" className='font-semibold pb-2'>N° de tarjeta</label>
                        <input className='w-full rounded-md h-11 bg-slate-200 outline-none px-2 py-4' />
                        {/* <p className="text-red-600 text-sm font-bold">
              {errors?.name?.message}
            </p> */}
                    </div>
                    <div className="flex flex-col pb-2">
                        <label htmlFor="name" className='font-semibold pb-2'>Nombre y apellido (tal como figura en la tarjeta)</label>
                        <input className='w-full rounded-md h-11 bg-slate-200 outline-none px-2 py-4' />
                        {/* <p className="text-red-600 text-sm font-bold">
              {errors?.name?.message}
            </p> */}
                    </div>
                    <div className='flex '>
                        <div className="flex flex-col pb-2 w-1/2">
                            <label htmlFor="name" className='font-semibold pb-2'>Vencimiento</label>
                            <input className='w-full rounded-md h-11 bg-slate-200 outline-none px-2 py-4' />
                            {/* <p className="text-red-600 text-sm font-bold">
              {errors?.name?.message}
            </p> */}
                        </div>
                        <div className="flex flex-col pb-2 w-1/2">
                            <label htmlFor="name" className='font-semibold pb-2'>CVV</label>
                            <input className='w-full rounded-md h-11 bg-slate-200 outline-none px-2 py-4' />
                            {/* <p className="text-red-600 text-sm font-bold">
              {errors?.name?.message}
            </p> */}
                        </div>
                    </div>
                </div>


            </form>
        </div>
    )
}
export default Register2;