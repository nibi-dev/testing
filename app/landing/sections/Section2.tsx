export function Section2() {
  return (
    <section
      id='section2'
      style={{
        background:
          'url(/carousel/test3.jpg) center center / cover scroll no-repeat',
      }}
      className='w-full relative h-screen p-32 before:block before:absolute before:inset-0 before:bg-[rgba(239, 206, 227, .5)]'>
      <div className='flex flex-wrap content-center w-1/3 h-full'>
        <h1 className='text-contrast-500 text-2xl font-bold w-full mb-2'>
          ¿QUIÉNES SOMOS?
        </h1>
        <p className='text-white mb-4'>
          Somos personas apasionadas por proteger y rescatar animales
          callejeros. Desde 2018, hemos transformado la vidas de más de 600
          peluditos, nos enfocamos principalmente en ancianos y
          discapacitados, los esterilizamos y les damos una segunda
          oportunidad en hogares amorosos
        </p>
        <button
          type='button'
          className='rounded-btn'>
          Dona Ya!
        </button>
      </div>
      <div className='w-2/3'>
        <picture></picture>
        <picture></picture>
        <picture></picture>
      </div>
    </section>
  );
}
