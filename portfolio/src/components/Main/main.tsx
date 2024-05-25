import { useState } from 'react';
import { Home } from '../../pages/Home';
import { Subpage } from '../../pages/Subpage';

const Main = () => {
  const [page, setPage] = useState("Home");

  function renderSwitch() {
    switch(page) {
      case 'Home':
        return <Home setPage={setPage}/>;
      case 'Nike':
        return <Subpage setPage={setPage}/>;
      case 'Creative':
        return <Subpage setPage={setPage}/>;
      case 'Me':
        return <Subpage setPage={setPage}/>;
      default:
        return <Home setPage={setPage}/>;
    }
  }

  return (
    renderSwitch()
  );
}

export default Main;