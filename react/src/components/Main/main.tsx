import { useState } from 'react';
import { Home } from '../../pages/Home';
import { Subpage } from '../../pages/Subpage';
import mousePos from "../../utils/useMousePos";
import { useMediaQuery } from 'react-responsive'

const Main = () => {
  const [page, setPage] = useState("Home");
  const {x, y} = mousePos();
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

  function renderSwitch() {
    switch(page) {
      case 'Home':
        return <Home setPage={setPage} x={x} y={y} isMobile={isMobile}/>;
      case 'Nike':
        return <Subpage setPage={setPage} x={x} y={y}/>;
      case 'Creative':
        return <Subpage setPage={setPage} x={x} y={y}/>;
      case 'Me':
        return <Subpage setPage={setPage} x={x} y={y}/>;
      default:
        return <Home setPage={setPage} x={x} y={y} isMobile={isMobile}/>;
    }
  }

  return (
    renderSwitch()
  );
}

export default Main;