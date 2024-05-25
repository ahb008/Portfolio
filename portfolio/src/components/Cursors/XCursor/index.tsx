import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import mousePos from '../../../utils/useMousePos';
import {ReactComponent as X} from '../../../svg/X.svg';
import './xCursor.scss';

interface XCursorProps {
    setPage: (page: string) => void;
}

export const XCursor: React.FC<XCursorProps> = ({setPage}) => {
    const [whichVariant, setWhichVariant] = useState("notPressed");

    const {x, y} = mousePos();

    const cursorVariants = {
        pressed: { scale: 2, x: x-24, y: y-24, backgroundColor: "#BABABA80" },
        notPressed: { scale: 1, x: x-24, y: y-24 },
    };

    const xVariants = {
      pressed: { scale: 2, x: 24, y: 10},
      notPressed: { scale: 2, x: 24, y: 10 },
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
          className="x-cursor pointer-off"
          animate={whichVariant}
          variants={cursorVariants}
        >
          <motion.div
            id="x"
            className="x-motion-wrapper"
            animate={whichVariant}
            variants={xVariants}
          >
            <X className='x'/>
          </motion.div>
        </motion.div>
        </>
    );
}