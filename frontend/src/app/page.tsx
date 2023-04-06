import { Faq } from '@/components/faq';
import { TypesVehicle } from '@/components/typeVehicle';
import { Requirement } from '@/components/requierement';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
        <div className="gradient relative z-0">
          <div className="bg-global-pattern bg-cover  bg-no-repeat w-full h-full absolute top-0 left-0 -z-10"></div>
          <TypesVehicle />
          <Requirement />
          {/* <Faq /> */}
        </div>
      </section>
    </main>
  );
}
