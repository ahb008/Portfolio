import { useState } from 'react';
import { Home } from '../../pages/Home';
import { Subpage } from '../../pages/Subpage';
import mousePos from "../../utils/useMousePos";

const Main = () => {
  const [page, setPage] = useState("Home");
  const {x, y} = mousePos();

  function renderSwitch() {
    switch(page) {
      case 'Home':
        return <Home setPage={setPage} x={x} y={y}/>;
      case 'Nike':
        return <Subpage setPage={setPage} x={x} y={y}/>;
      case 'Creative':
        return <Subpage setPage={setPage} x={x} y={y}/>;
      case 'Me':
        return <Subpage setPage={setPage} x={x} y={y}/>;
      default:
        return <Home setPage={setPage} x={x} y={y}/>;
    }
  }

  return (
    renderSwitch()
  );
}

export default Main;