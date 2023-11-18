import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import './titleScreen.scss';

export const TitleScreen: React.FC = () => {

  const titleRef = React.useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({repeat: -1, yoyo: true});
    tl.to(titleRef.current, {
      scale: 1.25,
      ease: "sine.out",
      duration: 1.6,
    });
  });

    return (
      <div className='title-screen-wrapper'>
        <svg className='circle-wrapper' width="200" height="200">
          <circle id="circle1" cx="100" cy="100" r="10" fill="grey"/>
        </svg>
        <p className="title-text" ref={titleRef}>
          click to enter
        </p>
      </div>
    );
}