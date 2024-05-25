import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import mousePos from '../../../utils/useMousePos';
import {ReactComponent as X} from '../../../svg/X.svg';
import './loader.scss';

interface LoaderProps {
    show: boolean
}

export const Loader: React.FC<LoaderProps> = ({show}) => {

    const {x, y} = mousePos();

    const draw = {
        hidden: { opacity: 0, x:x, y:y },
        visible: (i: any) => {
          const delay = 1 + i * 0.5;
          return {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { delay, type: "spring", duration: 4, bounce: 0 },
              opacity: { delay, duration: 0.01 }
            },
            x: x,
            y: y,
          };
        }
      };
    
    return (
        <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 100% 100%"
        initial="hidden"
        animate={show ? "visible" : "hidden"}
        className="loader-motion-wrapper"
        >
            <motion.circle
                cx={x}
                cy={y}
                r="52"
                stroke="#6A4EEC"
                variants={draw}
                strokeWidth="5px"
            />
        </motion.svg>
    );
}