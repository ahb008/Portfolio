import React, { useContext, useEffect, useRef, useState } from 'react';
import './titleScreen.scss';
import { motion } from 'framer-motion';
import SiteContext from '../Context/Context';

export const TitleScreen: React.FC = () => {

  const context = useContext(SiteContext);

  const variants = {
    hovering: { color: "red" }
  };

  return (
    <div className='title-screen-wrapper'>
      <p>
        hi, my name's Andrew Bass &#128032; <br/> I am a  
        <motion.div 
          className="special-text"
          animate={context?.hovering ? "hovering" : ""}
          variants={variants}
        >
          website developer
        </motion.div> 
        {/* and designer currently working at Nike &#127939; Previously, I worked for the Airforce detecting rocket launches &#128640; and conducted medical research &#128300; in my undergrad &#x1f393; I enjoy making making art &#127912; and pretty much everything outdoors &#128507; */}
        {/* hi. */}
      </p>
    </div>
  );
}