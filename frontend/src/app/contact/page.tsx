import Image from 'next/image';

export default function Contact() {
  return (
    <section className="py-20 bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-center ">
      <div className="max-w-5xl bg-white px-10 py-4 mx-auto mb-8 rounded-2xl text-primary-700 text-xl">
        <h1 className="text-3xl text-center pt-4">CONTÁCTENOS</h1>
        <p>
          Escribenos y una de nuestras ejecutivas especializadas se contactará
          contigo a la brevedad posible.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <p>nombre</p>
            <p>telefono</p>
          </div>
          <div>
            <p>email</p>
            <p>msg</p>
          </div>
        </div>
        <div className="mx-auto text-center">
          <button className="btn btnSecond px-10"> Enviar</button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 text-primary-700 text-xl">
        <div className="grid grid-cols-1 px-10 py-4  gap-4 bg-white rounded-xl">
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
        <div className="grid grid-cols-1 px-10 py-4 gap-4 bg-white rounded-xl">
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
