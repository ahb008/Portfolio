import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {ReactComponent as Arrow} from '../../../assets/svg/Arrow.svg';
import './arrowCursor.scss';

interface ArrowCursorProps {
  x: number,
  y: number
}


export const ArrowCursor: React.FC<ArrowCursorProps> = ({x, y}) => {
    const [whichVariant, setWhichVariant] = useState("notPressed");

    const cursorVariants = {
        pressed: { scale: 5, x: x-12, y: y-12, backgroundColor: "#BABABA80" },
        notPressed: { scale: 1, x: x-12, y: y-12 },
        specialText: { scale: 5, x: x-12, y: y-12, backgroundColor: "#BABABA80" }
    };

    const arrowVariants = {
      pressed: { scale: 1, x: -5, y: 5},
      notPressed: { scale: 0 },
      specialText: { scale: 1, zIndex: 1 }
  };

    useEffect(() => {
        const handleMouseDown = () => {
            setWhichVariant("pressed");
        };

        const handleMouseUp = () => {
            setWhichVariant("notPressed");
        };

        // Attaching the event listeners to the window object
        window.addEventListener('mouseup', handleMouseUp);

        const specialTextElements = document.querySelectorAll('.special-text');

        specialTextElements.forEach(element => {
          element.addEventListener('mouseenter', () => {
              setWhichVariant("specialText");
              window.addEventListener('mousedown', handleMouseDown);
          });
      
          element.addEventListener('mouseleave', () => {
              setWhichVariant("notPressed");
              window.removeEventListener('mousedown', handleMouseDown);
          });
        });

        // Cleanup function to remove the event listeners
        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);
    
    return (
        <>
        <motion.div
          id="cursor"
          className="cursor pointer-off"
          animate={whichVariant}
          variants={cursorVariants}
        >
          <motion.div
            id="arrow"
            className="arrow-motion-wrapper"
            animate={whichVariant}
            variants={arrowVariants}
          >
            <Arrow className='arrow'/>
          </motion.div>
        </motion.div>
        </>
    );
}