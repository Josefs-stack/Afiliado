'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import MagneticWrapper from './MagneticWrapper';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.1;
    audio.muted = false;

    const playAudio = async () => {
      try {
        await audio.play();
        setIsMuted(false);
      } catch {
        audio.muted = true;
        setIsMuted(true);
        try {
          await audio.play();
        } catch (err) {
          console.warn('Autoplay completamente bloqueado:', err);
        }
      }
    };

    setTimeout(() => {
      playAudio();
    }, 3000);
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.play().catch(() => {});

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <MagneticWrapper>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="rounded-full w-16 h-16 bg-neutral-950 flex justify-center items-center z-50 group"
    >
      <audio ref={audioRef} src="/audio/fundo.mp3" loop />
      
        <button
          onClick={toggleMute}
          className="w-full h-full text-neutral-50/80 rounded-full hover:scale-110 group-hover:text-neutral-50 flex items-center justify-center transition"
          aria-label="Alternar som"
        >
          {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
        </button>
      
    </motion.div>
    </MagneticWrapper>
  );
}
