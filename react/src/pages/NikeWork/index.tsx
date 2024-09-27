import { XCursor } from '../../components/Cursors/XCursor';
import {isMobile} from 'react-device-detect';
import emailIcon from "../../assets/svg/Email.svg";
import LinkedInIcon from "../../assets/svg/linkedIn.svg";
import cicularDesign from "./circularDesign.png";
import cardImage from "./cardImage.png";
import '../Subpage/subpage.scss';
import { useNavigate } from 'react-router-dom';

interface SubpageProps {
  x: number;
  y: number;
}

export const NikeWork: React.FC<SubpageProps> = ({ x, y}) => {
  const navigate = useNavigate();
  return (
    <>
      {!isMobile && <XCursor x={x} y={y}/>}
      <div className="subpage-wrapper">
        {isMobile && <a className="home-navigation" onTouchStart={()=>navigate("/")}>{`<- Home`}</a>}
        <div className="left-column">
          <div className="title-wrapper">
            <h1 className="title">Nike Work</h1>
            <h2 className="subtitle">Sep. 2022 - Present</h2>
          </div>
          <div className="description-wrapper">
            <p className="description">Developer on Nike's intranet featuring a customizable dashboard with drag/drop widgets. This is a React app written with typescript and integrates multiple APIs using GraphQL. Deployed to all corporate employees.</p>
            <p className="description">Independtly built 10+ React app websites, each tailored to specific departmental needs. These included sites for all employee affinitiy groups, the sustainability team, and the accessibility team.</p>
            <p className="description">Most of my Nike work is internal, but an example can be viewed <a className="a-tag click-icon" href="https://staging.circulardesign.nike.com/" target="_target">here</a>.</p>
            <div className="icons">
              <img className="click-icon" src={emailIcon} alt='Black email icon' onClick={() => window.open('mailto:ahb008@gmail.com')}/>
              <img className="click-icon" src={LinkedInIcon} alt='Black LinkedIn icon' onClick={() => window.open('https://www.linkedin.com/in/andrewbass-engineer/')}/>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="image-wrapper">
            <a className="a-tag click-icon" href="https://staging.circulardesign.nike.com/" target="_target">
              <img className="image" src={cicularDesign} alt='Photo of the Nike Circular Design website that I build'/>
            </a>
          </div>
          <div className="image-wrapper">
            <a className="a-tag click-icon" href="https://staging.circulardesign.nike.com/" target="_target">
              <img className="image" src={cardImage} alt='Photo of case study cards from the Nike Circular Design website that I build'/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}