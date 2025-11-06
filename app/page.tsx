'use client';

import { motion } from 'framer-motion';
import MagneticCursor from './components/MagneticCursor';
import MagneticWrapper from './components/MagneticWrapper';
import Header from './components/Header';

export default function Home() {
  return (
    <>
      <MagneticCursor />
      <motion.div
       animate={{ height: '100%', borderRadius: '40px' }}
       initial={{ height: '0%'}}
       transition={{ duration: 1 , ease: 'easeInOut', delay: 0.2 }}
       className="flex h-screen w-screen items-center justify-center font-sans bg-radial from-neutral-100 from-40% to-neutral-300 relative">
          <Header />
        <MagneticWrapper>
          <button className="rounded-lg w-40 h-20 flex items-center justify-center">
            <p className="text-lg font-semibold text-black">Botão</p>
          </button>
        </MagneticWrapper>
      </motion.div>
    </>
  );
}
