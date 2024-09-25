import { XCursor } from '../../components/Cursors/XCursor';
import beanieImage from "./beanie.jpeg"
import climbImage from "./climb.jpeg"
import emailIcon from "../../assets/svg/Email.svg";
import LinkedInIcon from "../../assets/svg/linkedIn.svg";
import './subpage.scss';

interface SubpageProps {
  x: number;
  y: number;
}

export const NikeWork: React.FC<SubpageProps> = ({ x, y}) => {

  return (
    <>
      <XCursor x={x} y={y}/>
      <div className="subpage-wrapper">
        <div className="left-column">
          <div className="title-wrapper">
            <h1 className="title">Hello!</h1>
            <h2 className="subtitle">I'm andrew bass.</h2>
          </div>
          <div className="description-wrapper">
            <p className="description">Currently, I work as a creative software developer at Nike specializing in front-end development based out of Portland, OR.</p>
            <p className="description">Besides tippy tapping keys, I enjoy rock climbing, film photography, and a really great park (because who doesn't).</p>
            <p className="description">Hope you enjoyed this website and feel free to reach out :)</p>
            <div className="icons">
              <img className="click-icon" src={emailIcon} alt='Black email icon' onClick={() => window.open('mailto:ahb008@gmail.com')}/>
              <img className="click-icon" src={LinkedInIcon} alt='Black LinkedIn icon' onClick={() => window.open('https://www.linkedin.com/in/andrewbass-engineer/')}/>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="image-wrapper">
            <img className="image" src={beanieImage} alt='Me wearing a yellow beanie smiling in a car'/>
          </div>
          <div className="image-wrapper">
            <img className="image" src={climbImage} alt='Me climbing two large boulders stacked on top of each other'/>
          </div>
        </div>
      </div>
    </>
  );
}