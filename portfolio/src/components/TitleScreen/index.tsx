import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import './titleScreen.scss';

export const TitleScreen: React.FC = () => {

  const [reversed, setReversed] = useState(false);
  const tl = useRef();

  const clickFunction = () => {
    console.log("yo");
    // clickAnimation();
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // @ts-ignore
      tl.current = gsap
        .timeline({repeat: -1, yoyo: true})
        .to(".title-text", {
            scale: 1.25,
            ease: "sine.out",
            duration: 1.6,
          });
      });

      // Animation cleanup function
      return () => ctx.revert();
    }, []);

    useEffect(() => {
      console.log("toggling reverse to", reversed);
      // @ts-ignore
      tl.current?.reversed(reversed);    
    }, [reversed]);

    return (
      <div className='title-screen-wrapper'>
        <p className="title-text" onClick={() => setReversed(!reversed)}>
          click to enter
        </p>
      </div>
    );
}