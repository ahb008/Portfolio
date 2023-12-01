'use client'; 
import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import mousePos from '../../utils/useMousePos';
import './cursor.scss';
import SiteContext from '../Context/Context';


export const Cursor: React.FC = () => {
    const context = useContext(SiteContext);
    const [whichVariant, setWhichVariant] = useState("notPressed");

    const {x, y} = mousePos();

    const variants = {
        pressed: { scale: 0.5, backgroundColor: "#80FF00", x: x-16, y: y-16},
        notPressed: { scale: 1, x: x-16, y: y-16 },
        specialText: { scale: 5, x: x-16, y: y-16, backgroundColor: "blue", zIndex: 1 }
    };

    useEffect(() => {
        const handleMouseDown = () => {
            setWhichVariant("pressed");
        };

        const handleMouseUp = () => {
            setWhichVariant("notPressed");
        };

        // Attaching the event listeners to the window object
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        const specialTextElements = document.querySelectorAll('.special-text');

        specialTextElements.forEach(element => {
          element.addEventListener('mouseenter', () => {
              setWhichVariant("specialText");
              context?.setHovering(true);
          });
      
          element.addEventListener('mouseleave', () => {
              setWhichVariant("notPressed");
              element.classList.remove("hovering");
              context?.setHovering(false);
          });
        });

        // Cleanup function to remove the event listeners
        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);
    
    return (
        <motion.div
          id="cursor"
          className="cursor pointer-off"
          animate={whichVariant}
          variants={variants}
        />
    );
}