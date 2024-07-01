import React, { useEffect, useState } from 'react';
import { XCursor } from '../../components/Cursors/XCursor';
import { Loader } from '../../components/Cursors/Loader';
import beanieImage from "./beanie.jpeg"
import climbImage from "./climb.jpeg"
import emailIcon from "../../assets/svg/Email.svg";
import LinkedInIcon from "../../assets/svg/linkedIn.svg";
import './subpage.scss';

interface SubpageProps {
  setPage: (page: string) => void;
  x: number;
  y: number;
}

export const Subpage: React.FC<SubpageProps> = ({setPage, x, y}) => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const handleMouseDown = () => {
        setShowLoader(true);
    };

    const handleMouseUp = () => {
      setShowLoader(false);
    };

    // Attaching the event listeners to the window object
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Cleanup function to remove the event listeners
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <XCursor setPage={setPage} x={x} y={y}/>
      {showLoader && <Loader show={showLoader} x={x} y={y}/>}
      <div className="subpage-wrapper">
        <div className="left-column">
          <div className="title-wrapper">
            <h1 className="title">Hello!</h1>
            <h2 className="subtitle">I'm andrew bass.</h2>
          </div>
          <div className="description-wrapper">
            <p className="description">Currently, I work as a creative software developer specializing in front-end development based out of Portland, OR.</p>
            <br/>
            <p className="description">Besides tapping keys, I enjoy rock climbing, film photography, and a really great park (because who doesn't).</p>
            <br/>
            <p>Hope you enjoyed this website and feel free to reach out :)</p>
            <div className="icons">
              <img className="icon" src={emailIcon} alt='Black email icon' onClick={() => window.open('mailto:ahb008@gmail.com')}/>
              <img className="icon" src={LinkedInIcon} alt='Black LinkedIn icon' onClick={() => window.open('https://www.linkedin.com/in/andrewbass-engineer/')}/>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="image-wrapper upper-left">
            <img className="image" src={beanieImage} alt='Me wearing a yellow beanie smiling in a car'/>
          </div>
          <div className="image-wrapper lower-right">
            <img className="image" src={climbImage} alt='Me climbing two large boulders stacked on top of each other'/>
          </div>
        </div>
      </div>
    </>
  );
}