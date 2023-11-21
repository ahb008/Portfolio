'use client'; 
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import mousePos from '../../utils/useMousePos';
import { motion } from 'framer-motion';

const Main = () => {
  const {x, y} = mousePos();
  const cursor =
    <motion.div
      className="cursor"
      variants={{
        default: {
          x: x-16,
          y: y-16,
        }
      }}
      animate="default"
    />

  return (
    <>
      {cursor}
      <Routes>
        <Route path="/*" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default Main;