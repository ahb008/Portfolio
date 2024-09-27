import { XCursor } from '../../components/Cursors/XCursor';
import emailIcon from "../../assets/svg/Email.svg";
import LinkedInIcon from "../../assets/svg/linkedIn.svg";
import '../Subpage/subpage.scss';
import print from "./print.jpg";

interface SubpageProps {
  x: number;
  y: number;
}

export const CreativeProjects: React.FC<SubpageProps> = ({ x, y}) => {

  return (
    <>
      <XCursor x={x} y={y}/>
      <div className="subpage-wrapper">
        <div className="left-column">
          <div className="title-wrapper">
            <h1 className="title">Creative Projects</h1>
            <h2 className="subtitle">More projects coming soon!</h2>
          </div>
          <div className="description-wrapper">
            <p className="description">I enjoy exploring different mediums, including printmaking, furniture design, and, most recently, film photography. My time studying design in college has shaped how I approach projects, and I’m always experimenting with new ideas and techniques.</p>
            <p className="description">Currently, I am working towards self-publishing a photography zine.</p>
            <div className="icons">
              <img className="click-icon" src={emailIcon} alt='Black email icon' onClick={() => window.open('mailto:ahb008@gmail.com')}/>
              <img className="click-icon" src={LinkedInIcon} alt='Black LinkedIn icon' onClick={() => window.open('https://www.linkedin.com/in/andrewbass-engineer/')}/>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="image-wrapper">
            <img className="image" src={print} alt='Scan of a black lino cut print of two hands fused at the wrist'/>
          </div>
          <div className="image-wrapper">
            <img className="image" src={print} alt='Scan of a black lino cut print of two hands fused at the wrist'/>
          </div>
        </div>
      </div>
    </>
  );
}