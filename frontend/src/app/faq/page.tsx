import { Question } from '@/components/faq';
import { Accordion } from '@/components/faq/Accordion';
import Image from 'next/image';

const Faq = () => {
  return (
    <section className="pb-32 bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-center ">
      <h1 className="text-4xl text-white text-center pt-10   ">
        PREGUNTAS Y RESPUESTAS
      </h1>
      <div className="w-[860px] h-[442px] mx-auto mt-14 mb-10  ">
        <Image
          alt="Image FAQ"
          src="/assets/images/faq.png"
          width={860}
          height={442}
        />
      </div>
      <div className="max-w-5xl bg-white px-20 py-8 mx-auto rounded-2xl text-primary-700 text-xl">
        <Question />
      </div>
      {/* <div className="max-w-5xl bg-white px-20 py-8 mx-auto rounded-2xl text-primary-700 text-xl">
        <Accordion />
      </div> */}
    </section>
  );
};
export default Faq;
