import FlipCard from '../components/FlipCard';

const data = [
  {
    id: 1,
    front: 'CONOCENOS',
    back: 'Rescatamos, rehabilitamos, esterilizamos y damos en adopción  a animales vulnerables.',
  },
  {
    id: 2,
    front: 'ADOPCIONES',
    back: 'Encuentra a los peluditos rescatados en busca de hogares y conoce el proceso de adopción',
  },
  {
    id: 3,
    front: 'DONACIONES',
    back: 'Dona o apadrina un peludito',
  },
  {
    id: 4,
    front: 'VOLUNTARIOS',
    back: 'Participa activamente en nuestra misión de rescate y protección animal.',
  },
];

const Section3 = () => {
  return (
    <section
      className='flex w-full content-between'
      id='section3'>
      {data.map(({ id, front, back }) => (
        <FlipCard
          key={id}
          frontContent={front}
          backContent={back}
        />
      ))}
    </section>
  );
};
export default Section3;
