import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import './titleScreen.scss';

export const TitleScreen: React.FC = () => {

  const titleRef = React.useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({repeat: -1});
    tl.to(titleRef.current, {
      scale: 3,
      duration: 3,
    });
  });

    return (
      <div className='title-screen-wrapper'>
        <p className="title-text" ref={titleRef}>click to enter.</p>
      </div>
    );
}