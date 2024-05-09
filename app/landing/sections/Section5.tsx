import React from 'react';

interface ItemProps {
  title: string;
}
const Item: React.FC<ItemProps> = ({ title }) => {
  return (
    <div className='w-1/3 flex justify-center flex-wrap'>
      <h1 className='text-center text-3xl font-bold text-white w-full mb-4'>
        {title}
      </h1>
      <div className='h-72 w-3/6 bg-shadow-300'></div>
    </div>
  );
};

export function Section5() {
  return (
    <section
      className='flex justify-between bg-contrast-200 py-9'
      id='section5'>
      <Item title='CONTACTO' />
      <Item title='ADOPTA' />
      <Item title='MEDIOS DE PAGO' />
    </section>
  );
}
