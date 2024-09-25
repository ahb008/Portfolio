import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Subpage } from '../../pages/Subpage';
import { useMediaQuery } from 'react-responsive'
import mousePos from "../../utils/useMousePos";

const Main = () => {
  const {x, y} = mousePos();
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

  // function renderSwitch() {
  //   switch(page) {
  //     case 'Home':
  //       return <Home setPage={setPage} x={x} y={y} isMobile={isMobile}/>;
  //     case 'Nike':
  //       return <Subpage setPage={setPage} x={x} y={y}/>;
  //     case 'Creative':
  //       return <Subpage setPage={setPage} x={x} y={y}/>;
  //     case 'Me':
  //       return <Subpage setPage={setPage} x={x} y={y}/>;
  //     default:
  //       return <Home setPage={setPage} x={x} y={y} isMobile={isMobile}/>;
  //   }
  // }

  return (
    <Routes>
      <Route path="/*" element={<Home x={x} y={y} isMobile={isMobile}/>} />
      <Route path="/nike-work" element={<Subpage x={x} y={y}/>} />
      <Route path="/creative-projects" element={<Subpage x={x} y={y}/>} />
      <Route path="/about" element={<Subpage x={x} y={y}/>} />
    </Routes>
  );
}

export default Main;