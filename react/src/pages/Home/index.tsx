import React from 'react';
import { ArrowCursor } from '../../components/Cursors/ArrowCursor';
import { useNavigate } from 'react-router-dom';
import './home.scss';

interface HomeProps {
  x: number,
  y: number,
}

export const Home: React.FC<HomeProps> = ({ x, y }) => {
  const navigate = useNavigate();
  return (
    <>
      <ArrowCursor x={x} y={y}/>
      <div className='title-screen-wrapper'>
        <h1 className='name-title'>Andrew</h1>
        <div className="all-links">
          <button className='subpage-link special-text' onClick={()=>navigate("/nike-work")}>NIKE WORK.</button>
          <button className='subpage-link special-text' onClick={()=>navigate("/creative-projects")}>CREATIVE PROJECTS.</button>
          <button className='subpage-link special-text' onClick={()=>navigate("/about")}>ABOUT ME.</button>
        </div>
        <h1 className='name-title'>Bass</h1>
      </div>
    </>
  );
}