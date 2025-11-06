'use client';

import { createContext, useState, useContext, ReactNode } from "react";

interface MagnetiContextType {
    isMagnetic: boolean;
    setIsMagnetic: (value: boolean) => void;
    magneticColor: string;
    setMagneticColor: (color: string) => void;
}

const MagnetiContext = createContext<MagnetiContextType | undefined>(undefined);

export const MagnetiProvider = ({ children }: { children: ReactNode }) => {
    const [isMagnetic, setIsMagnetic] = useState(false);
    const [magneticColor, setMagneticColor] = useState('#ffffff'); // default color

    return (
        <MagnetiContext.Provider value={{ isMagnetic, setIsMagnetic, magneticColor, setMagneticColor }}>
            {children}
        </MagnetiContext.Provider>
    );
};

export const useMagnetic = () => {
    const context = useContext(MagnetiContext);
    if (!context) throw new Error('useMagnetic must be used within a MagnetiProvider');
    return context;
};
