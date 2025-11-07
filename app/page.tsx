'use client';

import { motion } from 'framer-motion';
import MagneticCursor from './components/MagneticCursor';
import Header from './components/Header';
import Produtos from './components/Produtos';

export default function Home() {
  return (
    <>
      <MagneticCursor />
      <motion.div
       animate={{ height: '100%', borderRadius: '40px' }}
       initial={{ height: '0%'}}
       transition={{ duration: 1 , ease: 'easeInOut', delay: 0.2 }}
       className="flex flex-col w-full h-auto items-center justify-around font-sans bg-radial mb-10 from-neutral-100 from-40% to-neutral-400 overflow-y-scroll"
      >
        <Header />
        <Produtos />
      </motion.div>
    </>
  );
}
