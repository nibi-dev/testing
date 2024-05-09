import Image from 'next/image';
import logo from '/public/NibiGold.svg';
export function Navbar() {
  return (
    <nav className='w-full bg-green-100 p-4 flex flex-nowrap '>
      <Image
        src={logo}
        alt='logo'
        className='h-14 w-auto'
      />
      <div className='flex justify-between items-center ml-auto'>
        {[
          ['Quienes somos', '#section1'],
          ['Conócenos', '#section2'],
          ['Alianzas', '#section3'],
          ['Dona', '#section4'],
        ].map(([title, url]) => (
          <a
            href={url}
            key={title}
            className='rounded-3xl mx-2 px-3 py-2 text-shadow-500 font-medium hover:bg-white hover:text-slate-900'>
            {title}
          </a>
        ))}
      </div>
      <button
        className='rounded-btn'
        type='button'>
        Contacto
      </button>
    </nav>
  );
}
