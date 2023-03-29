import Image from 'next/image';

import hero from '../../public/assets/images/hero.png';
import { Faq } from '@/components/faq';
import { TypesVehicle } from '@/components/typeVehicle';
import { Requirement } from '@/components/requierement';

export default function Home() {
  return (
    <main>
      <section>
        <Image src={hero} alt="hero banner" className="w-full" />
        <TypesVehicle />
        <Requirement />
        <Faq />
      </section>
    </main>
  );
}
