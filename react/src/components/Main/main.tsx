import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Subpage } from '../../pages/Subpage';
import { CreativeProjects } from '../../pages/CreativeProjects';
import mousePos from "../../utils/useMousePos";
import { NikeWork } from '../../pages/NikeWork';

const Main = () => {
  const {x, y} = mousePos();

  return (
    <Routes>
      <Route path="/*" element={<Home x={x} y={y} />} />
      <Route path="/nike-work" element={<NikeWork x={x} y={y}/>} />
      <Route path="/creative-projects" element={<CreativeProjects x={x} y={y}/>} />
      <Route path="/about" element={<Subpage x={x} y={y}/>} />
    </Routes>
  );
}

export default Main;