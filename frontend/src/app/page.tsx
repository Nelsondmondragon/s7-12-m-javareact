import Image from 'next/image';
import profilePic from '../../public/assets/images/Ford-camion1.jpg';
import image1 from '../../public/assets/images/Chevrolet-Silverado-3500-HD-III-K2XX-Double-Cab-Long-Box.jpg';
import Register from './register/page';

export default function Home() {
  return (
    <main>
      <section className="mt-[80px] max-w-5xl mx-auto bg-blue-200 px-10 ">

        <h1 className="text-3xl">Vehiculos disponibles</h1>
        <div id="section0">
          <h2 className="text-2xl text-blue-500 my-10">
            Chevrolet Silverado 3500
          </h2>
          <div>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <Image
              src={image1}
              alt="Chevrolet Silverado 3500"
              placeholder="blur" // Optional blur-up while loading
            />

            <p className="my-120">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              loren50 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur voluptas, praesentium et natus repellat porro ipsam
              modi vel vitae ipsa nobis veniam odit suscipit magni reiciendis
              eum harum perspiciatis explicabo! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Impedit loren50 Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Consequuntur voluptas,
              praesentium et natus repellat porro ipsam modi vel vitae ipsa
              nobis veniam odit suscipit magni reiciendis eum harum perspiciatis
            </p>
          </div>
        </div>
        <div id="section1">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <div>
              <h2 className="text-2xl text-blue-500 my-10">Camión Ford 2019</h2>
              <p className="my-120">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                loren50 Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Consequuntur voluptas, praesentium et natus repellat porro
                ipsam modi vel vitae ipsa nobis veniam odit suscipit magni
                reiciendis eum harum perspiciatis explicabo! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Impedit loren50 Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
                voluptas, praesentium et natus repellat porro ipsam modi vel
                vitae ipsa nobis veniam odit suscipit magni reiciendis eum harum
                perspiciatis
              </p>
            </div>
            <Image
              src={profilePic}
              alt="foto"
              placeholder="blur" // Optional blur-up while loading
            />
          </div>
        </div>
        <div id="section2">
          <h2 className="text-2xl text-blue-500 my-10">section 2</h2>

          <p className="my-120">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            veritatis inventore deleniti iusto sit, dignissimos fuga accusamus
            rerum rem aperiam recusandae facere exercitationem pariatur! Quae
            accusamus quidem aperiam quo rem! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Impedit loren50 Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Consequuntur voluptas,
            praesentium et natus repellat porro ipsam modi vel vitae ipsa nobis
            veniam odit suscipit magni reiciendis eum harum perspiciatis
            explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit loren50 Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Consequuntur voluptas, praesentium et natus repellat porro
            ipsam modi vel vitae ipsa nobis veniam odit suscipit magni
            reiciendis eum harum perspiciatis explicabo! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Impedit loren50 Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Consequuntur voluptas,
            praesentium et natus repellat porro ipsam modi vel vitae ipsa nobis
            veniam odit suscipit magni reiciendis eum harum perspiciatis
            explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit loren50 Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Consequuntur voluptas, praesentium et natus repellat porro
            ipsam modi vel vitae ipsa nobis veniam odit suscipit magni
            reiciendis eum harum perspiciatis explicabo!
          </p>
        </div>
        <div id="section3">
          <h2 className="text-2xl text-blue-500 my-10">section 3</h2>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.pexels.com/photos/5066935/pexels-photo-5066935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Picture of the author"
              width={500}
              height={200}
            />
            <p className="my-120">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              aliquid a unde, accusantium totam dignissimos, et illo molestiae,
              aspernatur magnam perferendis cum repudiandae atque placeat
              corporis saepe vero facere architecto.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Impedit loren50 Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Consequuntur voluptas,
              praesentium et natus repellat porro ipsam modi vel vitae ipsa
              nobis veniam odit suscipit magni reiciendis eum harum perspiciatis
              explicabo! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Impedit loren50 Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Consequuntur voluptas, praesentium et natus
              repellat porro ipsam modi vel vitae ipsa nobis veniam odit
              suscipit magni reiciendis eum harum perspiciatis explicabo! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Impedit loren50
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur voluptas, praesentium et natus repellat porro ipsam
              modi vel vitae ipsa nobis veniam odit suscipit magni reiciendis
              eum harum perspiciatis explicabo! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Impedit loren50 Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Consequuntur voluptas,
              praesentium et natus repellat porro ipsam modi vel vitae ipsa
              nobis veniam odit suscipit magni reiciendis eum harum perspiciatis
              explicabo!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
