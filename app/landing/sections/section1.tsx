'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';

const data = [
  {
    id: 1,
    title: '¡Bienvenidos a Fundación Huellitas Callejeras Barranquilla!',
    text: 'Rescatamos peluditos ancianos y discapacitados, dándoles una segunda oportunidad.',
    img: '/carousel/test1.jpg',
  },
  {
    id: 2,
    title: '¡Bienvenidos a Fundación Huellitas Callejeras Barranquilla!',
    text: 'Más de 1000 esterilizaciones y más de 420 adopciones',
    img: '/carousel/test2.jpg',
  },
  {
    id: 3,
    title: '¡Bienvenidos a Fundación Huellitas Callejeras Barranquilla!',
    text: 'Desde 2018, hemos transformando más de 600 vidas',
    img: '/carousel/test3.jpg',
  },
  {
    id: 4,
    title: '¡Bienvenidos a Fundación Huellitas Callejeras Barranquilla!',
    text: 'Únete a nosotros en esta misión de amor por los animales',
    img: '/carousel/test3.jpg',
  },
];

export function Section1() {
  return (
    <section
      className='w-full h-[calc(100vh-90px)]'
      id='section1'>
      <Swiper
        effect={'fade'}
        slidesPerView={1}
        loop={true}
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className='h-full'>
        {data.map(({ id, title, text, img }) => (
          <SwiperSlide key={id}>
            <div
              className='h-full w-full absolute left-0 top-0'
              style={{
                background: `url(${img}) center center / cover scroll no-repeat`,
              }}></div>
            <div className='h-full w-full absolute top-0 left-0 bg-contrast-500 opacity-10' />
            <div className='absolute h-full w-full flex justify-center content-center flex-wrap'>
              <h1 className='text-center text-4xl text-white font-bold mb-4'>
                {title}
              </h1>
              <p className='text-center text-xl text-white w-1/2 mb-4'>
                {text}
              </p>
              <div className='flex justify-center w-full'>
                <button
                  type='button'
                  className='rounded-btn '>
                  Dona Ya!
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
