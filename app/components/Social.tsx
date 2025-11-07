'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { FaTiktok , FaInstagram, FaYoutube,  } from "react-icons/fa6";

export default function Header() {
    return (
            <>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }} 
                className="w-40 h-10 mt-3 flex items-center justify-around"
              >
                <Link href="/social" className="text-neutral-950/80 hover:text-neutral-950 transition font-medium">
                  <FaYoutube size={22} />
                </Link>
                <Link href="/social" className="text-neutral-950/80 hover:text-neutral-950 transition font-medium">
                  <FaInstagram size={22} />
                </Link>
                <Link href="/social" className="text-neutral-950/80 hover:text-neutral-950 transition font-medium">
                  <FaTiktok  size={22} />
                </Link>
              </motion.li>
         </>

    );
}