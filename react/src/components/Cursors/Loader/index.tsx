import { motion } from 'framer-motion';
import './loader.scss';

interface LoaderProps {
    x: number;
    y: number;
}

export const Loader: React.FC<LoaderProps> = ({x, y}) => {

    const draw = {
        hidden: { pathLength: 0, opacity: 0 }, 
        visible: {
            pathLength: 1.1,
            opacity: 1,
            transition: {
              pathLength: { type: "spring", duration: 2.5, bounce: 0 },
              opacity: { duration: 0.01 }
            }
        }
      };
    
    return (
        <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 100% 100%"
        initial="hidden"
        animate="visible"
        className="loader-motion-wrapper"
        >
            <motion.circle
                cx={x}
                cy={y}
                r="52"
                stroke="#6A4EEC"
                variants={draw}
                strokeWidth="5px"
                custom={1}
            />
        </motion.svg>
    );
}