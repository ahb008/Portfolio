import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {ReactComponent as X} from '../../../assets/svg/X.svg';
import './xCursor.scss';

interface XCursorProps {
    setPage: (page: string) => void;
    x: number;
    y: number;
}

export const XCursor: React.FC<XCursorProps> = ({setPage, x, y}) => {
    const [whichVariant, setWhichVariant] = useState("notPressed");
    const timerRef:any = useRef();

    const cursorVariants = {
      pressed: { scale: 2, x: x-24, y: y-24, backgroundColor: "#BABABA80" },
      notPressed: { scale: 1, x: x-24, y: y-24 },
    };

    const xVariants = {
      pressed: { scale: 2, x: 24, y: 10},
      notPressed: { scale: 2, x: 24, y: 10 },
    };

    //Function to detect a long press
    function startPressTimer(ms: number) {
      timerRef.current = setTimeout(() => {
        setPage("Home");
      }, ms);
    }

    useEffect(() => {
        const handleMouseDown = () => {
            setWhichVariant("pressed");
            startPressTimer(1200);
        };

        const handleMouseUp = () => {
            setWhichVariant("notPressed");
            clearTimeout(timerRef.current);
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
          initial={{ x: x, y: y }}
          animate={whichVariant}
          variants={cursorVariants}
        >
          <motion.div
            id="x"
            className="x-motion-wrapper"
            initial={"notPressed"}
            animate={whichVariant}
            variants={xVariants}
          >
            <X className='x'/>
          </motion.div>
        </motion.div>
    </>
    );
}