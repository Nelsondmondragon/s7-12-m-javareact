'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import { sliderData } from './SlideShow/SliderData';

export const Hero = () => {
  const slideshow = useRef(null);

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
    <section className="relative overflow-hidden">
      <div className="relative flex" ref={slideshow}>
        {sliderData.map((slide, i) => {
          return (
            <div
              className="min-w-full overflow-hidden z-50 duration-500 ease-linear"
              key={i}
            >
              <div className="">
                <Image
                  className="w-full align-top h-auto"
                  width={1440}
                  height={512}
                  src={slide.image}
                  alt={slide.alt}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000c2]">
        <div className="w-1/2 ml-auto text-white mt-12 p-12">
          <h1 className="text-7xl font-semibold mb-6">Bienvenidx a MoveAR</h1>
          <h2 className="text-4xl mb-6 ">La forma más fácil de mudarse</h2>
          <p className="text-2xl mb-12 max-w-2xl ">
            Calcula tu mudanza y escoge un vehículo acorde a tus necesidades
          </p>
          <button className="bg-white px-8 py-2 text-xl text-black">
            Calcular
          </button>
        </div>
      </div>

      {/* <div className={styles.buttons}>
        <IoArrowBack className={styles.arrows} onClick={prevSlide} />
        <IoArrowForward className={styles.arrows} onClick={nextSlide} />
      </div> */}
    </section>
  );
};
