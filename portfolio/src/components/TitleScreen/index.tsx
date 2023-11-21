import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import './titleScreen.scss';

export const TitleScreen: React.FC = () => {

  const [runDot, setRunDot] = useState(false);
  const tl = useRef();

    useEffect(() => {
      let ctx;
      if (runDot) {
        ctx = gsap.context(() => {
          // @ts-ignore
          tl.current = gsap
            .timeline()
            .to(".circle", {
                scale: 450,
                ease: "expoScale(1,7,none)",
                duration: 1.75,
              });
          });
      }
    }, [runDot]);

    return (
      <div className='title-screen-wrapper'>
        <p onClick={() => setRunDot(true)}>
          {/* hi, my name's Andrew Bass &#128032; I am a website developer and designer currently working at Nike &#127939; Previously, I worked for the Airforce detecting rocket launches &#128640; and conducted medical research &#128300; in my undergrad &#x1f393; I enjoy making making art &#127912; and pretty much everything outdoors &#128507; */}
          hi, click me 
        </p>
      </div>
    );
}