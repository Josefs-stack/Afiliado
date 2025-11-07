'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import BackgroundMusic from "./BackgroundMusic";
import MagneticWrapper from "./MagneticWrapper";
import ButtonShare from "./ButtonShare";
import Social from "./Social";

export default function Header() {
    return (
        <div className="w-full min-h-72 py-5 flex justify-around items-center top-5 z-50">

          <BackgroundMusic />

          <div className="w- h-full flex flex-col justify-center items-center">
            <MagneticWrapper>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }} 
                className="w-34 h-34 flex items-center justify-center rounded-full border-5 border-white overflow-hidden"
                >
                  <Image src="/baka.jpg" alt="Logo" width={150} height={150} />
              </motion.div>
            </MagneticWrapper>
            <Social />
          </div>
          
          <ButtonShare />

        </div>
    );
}