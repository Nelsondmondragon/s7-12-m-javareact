import { Faq } from '@/components/faq';
import { TypesVehicle } from '@/components/typeVehicle';
import { Requirement } from '@/components/requierement';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
        <TypesVehicle />
        <Requirement />
        {/* <Faq /> */}
      </section>
    </main>
  );
}
