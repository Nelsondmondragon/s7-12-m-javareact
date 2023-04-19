'use client';
import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/navigation';
import postCarsAvailable from '../../lib/postCarsAvailable';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { CardTruck } from '@/components/typeVehicle';

const UpdateReservation = () => {
  const bookinDat =
    typeof window !== 'undefined' && localStorage.getItem('bookingDates')
      ? JSON.parse(localStorage.getItem('bookingDates'))
      : '';

  const car =
    typeof window !== 'undefined' && localStorage.getItem('carSelected')
      ? JSON.parse(localStorage.getItem('carSelected'))
      : '';

  let item =
    typeof window !== 'undefined' && localStorage.getItem('category')
      ? JSON.parse(localStorage.getItem('category'))
      : '';

  console.log(bookinDat);

  // esto lo estoy cambiando temporalmene para poder pasar a producción
  // const [startDate, setStartDate] = useState(new Date(bookinDat.startDat));
  // const [endDate, setEndDate] = useState(new Date(bookinDat.endDat));
  // const [startTime, setStartTime] = useState(new Date(bookinDat.startDat));
  // const [endTime, setEndTime] = useState(new Date(bookinDat.endDat));

  //  esta es la modificación que hice para poder pasar a producción
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const [startPl, setStartPl] = useState(bookinDat.startPlace);
  const [returnPl, setReturnPl] = useState(bookinDat.returnPlace);
  const [driver, setDriver] = useState(bookinDat.driver);
  const [pawn, setPawn] = useState(bookinDat.pawn);

  const router = useRouter();

  registerLocale('es', es);

  // let item =
  //   typeof window !== 'undefined' && localStorage.getItem('category')
  //     ? JSON.parse(localStorage.getItem('category')).firstName
  //     : '';
  // let item = JSON.parse(localStorage.getItem('category'));
  // let section = JSON.parse(localStorage.getItem('vehiclesSection'));
  // let user = localStorage.getItem('user');

  const onSearch = async () => {
    let category;

    if (item === 'small') {
      category = 1;
    } else if (item === 'medium') {
      category = 2;
    } else {
      category = 3;
    }

    const validateLocation = (loc) => {
      switch (loc) {
        case '02000010':
          return 'Buenos Aires';
          break;
        case '14014010':
          return 'Córdoba';
          break;
        case '06441030':
          return 'La Plata';
          break;
        case '10077020':
          return 'Rosario';
          break;
        case '66028050':
          return 'Salta';
          break;

        default:
          break;
      }
    };

    const selection = {
      startPlace: startPl,
      start: startDate.toISOString().split('.')[0],
      returnPlace: returnPl,
      end: endDate.toISOString().split('.')[0],
      id: category,
      location: validateLocation(startPl),
    };

    const postCar = await postCarsAvailable(selection);
    localStorage.setItem('cars', JSON.stringify(postCar));
    localStorage.setItem('bookingDates', JSON.stringify(selection));
    // console.log(postCar);

    // if (section === null) {
    //   router.push(`/booking/${item}`);
    // } else if (section !== null && user === null) {
    //   router.push(`/login`);
    // } else {
    //   router.push(`/pay`);
    //   //localStorage.removeItem('vehiclesSection');
    // }
    router.push(`/confirmed`);
  };

  const anularBooking = () => {
    localStorage.removeItem('bookingDates');
    localStorage.removeItem('cars');
    localStorage.removeItem('carSelected');
    router.push(`/booking`);
  };

  // eslint-disable-next-line react/display-name
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="text-[16px] bg-white w-[147px] h-[36px] text-left pl-2 rounded-md border-gray-400 shadow-md md:h-[46px] md:text-[20px] lg:w-[220px]"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));

  return (
    <div>
      <section className="min-h-screen flex flex-col items-center bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-center">
        <div className="flex items-center gap-3 bg-[#012337CC] w-full h-[44px] pl-5 lg:hidden">
          <AiOutlineArrowLeft className=" text-white text-[18px] md:text-[22px]" />
          <h3 className="text-[18px] text-white md:text-[22px]">
            Este es el resumen de tu reserva actual. Podrás modificarla desde
            aqui
          </h3>
        </div>
        <div className="flex flex-col gap-1 w-[92%] sm:w-[85%] mt-5 xl:w-[70%] 2xl:w-[60%]">
          <h3 className="hidden text-[32px] text-white mt-3 lg:block">
            Este es el resumen de tu reserva actual. Podrás modificarla desde
            aqui
          </h3>
          <div className=" rounded-[20px] bg-form backdrop-blur-[8px] px-3 py-5 pb-10 md:px-5 lg:px-10">
            <p className="text-[15px] mb-1 font-bold md:text-[22px]">
              Lugar de retiro
            </p>
            <div className="flex flex-col md:flex-row md:gap-3 lg:justify-between lg:gap-6">
              <div className="w-full lg:w-[480px]">
                <select
                  className="w-full h-[36px] text-[16px] px-2 rounded-md border-gray-400 shadow-md md:h-[46px] md:text-[20px] md:max-w-sm lg:max-w-lg"
                  value={startPl}
                  onChange={(e) => setStartPl(e.target.value)}
                >
                  <option value="02000010">Buenos Aires</option>
                  <option value="14014010">Córdoba</option>
                  <option value="06441030">La Plata</option>
                  <option value="10077020">Rosario</option>
                  <option value="66028050">Salta</option>
                </select>
              </div>
              <div className="flex justify-between mt-4 md:mt-0 md:gap-3 lg:gap-6">
                <div>
                  <p className="text-[15px] mb-1 font-bold md:hidden">Fecha</p>
                  <DatePicker
                    wrapperClassName="w-[148px]"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    locale="es"
                    customInput={<ExampleCustomInput />}
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
                <div>
                  <p className="text-[15px] mb-1 font-bold md:hidden">Hora</p>
                  <DatePicker
                    wrapperClassName="w-[148px]"
                    selected={startTime}
                    onChange={(date) => setStartTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Hora"
                    dateFormat="h:mm aa"
                    customInput={<ExampleCustomInput />}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4 pl-4 mt-4 mb-5">
              <input type="checkbox" />
              <p className="text-[16px] md:text-[20px] ">
                Retiro y devuelvo en el mismo lugar
              </p>
            </div>
            <p className="text-[15px] mb-1 font-bold md:text-[22px]">
              Lugar de Entrega
            </p>
            <div className="flex flex-col md:flex-row md:gap-3 lg:justify-between lg:gap-6">
              <div className="w-full lg:w-[480px]">
                <select
                  className="w-full h-[36px] text-[16px] px-2 rounded-md border-gray-400 shadow-md md:h-[46px] md:text-[20px] md:max-w-sm lg:max-w-lg"
                  onChange={(e) => setReturnPl(e.target.value)}
                  value={returnPl}
                >
                  <option value="02000010">Buenos Aires</option>
                  <option value="14014010">Córdoba</option>
                  <option value="06441030">La Plata</option>
                  <option value="10077020">Rosario</option>
                  <option value="66028050">Salta</option>
                </select>
              </div>
              <div className="flex justify-between mt-4 md:mt-0 md:gap-3 lg:gap-6">
                <div className="">
                  <p className="text-[15px] mb-1 font-bold md:hidden">Fecha</p>
                  <DatePicker
                    wrapperClassName="w-[200px]"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    locale="es"
                    customInput={<ExampleCustomInput />}
                    dateFormat="dd/MM/yyyy"
                  />
                </div>

                <div>
                  <p className="text-[15px] mb-1 font-bold md:hidden">Hora</p>
                  <DatePicker
                    wrapperClassName="w-[200px]"
                    selected={endTime}
                    onChange={(date) => setEndTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Hora"
                    dateFormat="h:mm aa"
                    customInput={<ExampleCustomInput />}
                  />
                </div>
              </div>
            </div>
            <div className="pt-5">
              <div className="mb-2">
                <p className=" text-[16px] mb-3 md:text-[20px]">
                  ¿Necesitas contratar un peón de ayuda?
                </p>
                <div className="pl-3">
                  <div className="flex gap-4">
                    <p className=" text-[16px] w-[30px] md:text-[20px]">Si</p>
                    <input
                      type="radio"
                      name="helper"
                      value="Yes"
                      checked={pawn}
                      onChange={() => setPawn(true)}
                    />
                  </div>
                  <div className="flex gap-4">
                    <p className=" text-[16px] w-[30px] md:text-[20px]">No</p>
                    <input
                      type="radio"
                      name="helper"
                      value="No"
                      checked={!pawn}
                      onChange={() => setPawn(true)}
                    />
                  </div>
                </div>
              </div>
              <p className=" text-[16px] mb-3 md:text-[20px]">
                ¿Necesitas contratar un chofer?
              </p>
              <div className="pl-3">
                <div className="flex gap-4">
                  <p className=" text-[16px] w-[30px] md:text-[20px]">Si</p>
                  <input
                    type="radio"
                    name="driver"
                    value="Yes"
                    checked={driver}
                    onChange={() => setDriver(true)}
                  />
                </div>
                <div className="flex gap-4">
                  <p className=" text-[16px] w-[30px] md:text-[20px]">No</p>
                  <input
                    type="radio"
                    name="driver"
                    value="No"
                    checked={!driver}
                    onChange={() => setDriver(true)}
                  />
                </div>
              </div>
              <p className=" text-[16px] mt-3 mb-3 md:text-[20px]">
                Actualmente tienes reservado:
              </p>
              <div className=" text-white w-[90%] md:w-[340px] lg:w-[350px] rounded-t-lg">
                <div>
                  <img
                    className="  object-cover rounded-t-lg sm:w-autolg:w-[393px]"
                    src={car?.imageResource?.urlSecure}
                    alt=""
                  />
                </div>
                <div className=" bg-primary-700 pt-5 rounded-b-lg sm:max-w-lg">
                  <p className=" text-center text-[18px] md:text-[24px]">
                    Vehículo {car.make}
                  </p>
                  <hr className="w-[90%] m-auto" />
                  <div className="py-5 px-10 text-[16px] md:text-[16px]">
                    <li>Modelo: {car.model} </li>
                    <li>
                      Capacidad de carga:{car?.category?.capacityLimit} Kg
                    </li>
                    <li>Costo por hora: $ {car?.category?.hourlyPrice} </li>
                  </div>
                  <p className="ml-5 text-[18px] pb-5 md:text-[24px]">
                    TOTAL IVA incl: {bookinDat.total} $
                  </p>
                </div>
              </div>
              {/* <p className=" text-[16px] mt-3 mb-3 md:text-[20px]">
                ¿Desear Cambiar de Vehiculo?
              </p>
              <div className="relative grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4 text-lg text-white">
                <CardTruck
                  image="/assets/images/camion1.png"
                  title="CAMIÓN CHICO"
                  line1="20 m3"
                  line2="3 Cargadores"
                  line3="Departamento y/o casa de 4 personas"
                />
                <CardTruck
                  image="/assets/images/camion2.png"
                  title="CAMIÓN MEDIANO"
                  line1="50 m3"
                  line2="4 Cargadores"
                  line3="Departamento y/o casa de 5 personas"
                />
                <CardTruck
                  image="/assets/images/camion3.png"
                  title="CAMIÓN GRANDE"
                  line1="80 m3"
                  line2="5 Cargadores"
                  line3="Departamento y/o casa de 6 personas y objetos extras"
                />
              </div> */}
            </div>
          </div>
          <div className="flex">
            <button
              className=" bg-primary-600 text-white text-[16px] font-bold w-[167px] m-auto py-3 rounded-md mt-4 mb-5 md:w-[180px]"
              onClick={onSearch}
            >
              Actualizar Reserva
            </button>
            <button
              className=" bg-white text-primary-600 text-[16px] font-bold w-[167px] m-auto py-3 rounded-md mt-4 mb-5 md:w-[180px]"
              onClick={anularBooking}
            >
              Anular Reserva
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateReservation;
