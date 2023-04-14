'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import { sliderData } from './sliderData';

export const Hero = () => {
  const slideshow = useRef(null);
  const router = useRouter();

  const autoScroll = true;
  let intervalTime = 7000;
  let slideInterval: NodeJS.Timer;

  const autoAdvance = () => {
    slideInterval = setInterval(prevSlide, intervalTime);
  };

  // const nextSlide = () => {
  //   if (slideshow.current.children.length > 0) {
  //     const firstSlide = slideshow.current.children[0];
  //     slideshow.current.style.transition = `2s linear all`;
  //     slideshow.current.style.transform = `translateX(-100%)`;

  //     const transition = () => {
  //       slideshow.current.style.transition = `none`;
  //       slideshow.current.style.transform = `translateX(0)`;
  //       slideshow.current.appendChild(firstSlide);
  //       slideshow.current.removeEventListener('transitionend', transition);
  //     };

  //     slideshow.current.addEventListener('transitionend', transition);
  //   }
  // };

  const prevSlide = () => {
    if (slideshow.current.children.length > 0) {
      const lastSlide =
        slideshow.current.children[slideshow.current.children.length - 1];

      slideshow.current.insertBefore(lastSlide, slideshow.current.firstChild);
      slideshow.current.style.transition = 'none';
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `2s linear all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    if (autoScroll) {
      autoAdvance();
    }
    return () => {
      clearInterval(slideInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative overflow-hidden bg-primary-800 bg-opacity-75 h-[198px] md:h-[295px] lg:h-[512px] w-full ">
      <div className="hidden relative md:flex" ref={slideshow}>
        {sliderData.map((slide, i) => {
          return (
            <div
              className="min-w-full overflow-hidden z-50 duration-500 ease-linear"
              key={i}
            >
              <div className="bg-black bg-opacity-70 md:h-[295px] lg:h-[512px] w-full relative  ">
                <Image
                  className="object-cover object-center  mix-blend-overlay"
                  fill
                  src={slide.image}
                  alt={slide.alt}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[100] ">
        <div className="w-full md:w-2/3 xl:w-3/5 ml-auto text-white mt-4 lg:mt-12 p-4 md:p-8 lg:px-12">
          <h1 className="flex flex-col md:flex-row md:space-x-3 text-4xl lg:text-6xl font-semibold mb-6">
            <span>Bienvenido a</span>
            <span>MoveAR</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl md:mb-2 lg:mb-6 font-medium  ">
            La forma más fácil de mudarse
          </h2>
          <p className="hidden md:block lg:text-2xl lg:mb-12 max-w-2xl ">
            Calcula tu mudanza y escoge un vehículo acorde a tus necesidades
          </p>
          <div className="hidden md:block md:text-end lg:text-start">
            <button
              className="btn px-20 py-2  "
              onClick={() => router.push('/calculator')}
            >
              Calcular
            </button>
          </div>
        </div>
      </div>

      {/* <div className={styles.buttons}>
        <IoArrowBack className={styles.arrows} onClick={prevSlide} />
        <IoArrowForward className={styles.arrows} onClick={nextSlide} />
      </div> */}
    </section>
  );
};
