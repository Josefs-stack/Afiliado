'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import MagneticWrapper from './MagneticWrapper';

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'Confira isso!',
      text: 'Olha só o que encontrei!',
      url: typeof window !== 'undefined' ? window.location.href : '',
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        console.log('Falha ao compartilhar:', err);
      }
    }

    // ✅ Fallback: copiar link
    try {
      await navigator.clipboard.writeText(shareData.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error('Erro ao copiar:', error);
    }
  };

  return (
    <MagneticWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="rounded-full w-16 h-16 bg-neutral-950 flex justify-center items-center z-50 group"
      >
        <button
          onClick={handleShare}
          aria-label="Compartilhar"
          className="w-full h-full text-neutral-50/80 rounded-full hover:scale-110 group-hover:text-neutral-50 flex items-center justify-center transition"
        >
          <FaShareAlt size={24} />
        </button>

        {copied && (
          <span className="absolute -bottom-8 text-xs text-neutral-50/80">
            Link copiado!
          </span>
        )}
      </motion.div>
    </MagneticWrapper>
  );
}
