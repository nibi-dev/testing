import { Navbar } from './landing/components/navbar';
import { Section2 } from './landing/sections/Section2';
import { Section1 } from './landing/sections/section1';
import  Section3 from './landing/sections/Section3';
import { Section4 } from './landing/sections/Section4';
import { Section5 } from './landing/sections/Section5';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </main>
  );
}
