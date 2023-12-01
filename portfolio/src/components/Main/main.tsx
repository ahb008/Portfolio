import { useState } from 'react';
import { Cursor } from '../Cursor';
import { TitleScreen } from '../TitleScreen';
import SiteContext from '../Context/Context';

const Main = () => {

  const [hovering, setHovering] = useState(false);

  return (
    <SiteContext.Provider value={{ hovering, setHovering}}>
      <Cursor/>
      <TitleScreen/>
    </SiteContext.Provider>
  );
}

export default Main;