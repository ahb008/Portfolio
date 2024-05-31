import React from 'react';
import { ArrowCursor } from '../../components/Cursors/ArrowCursor';
import './home.scss';

interface HomeProps {
  setPage: (page: string) => void;
  x: number,
  y: number,
}

export const Home: React.FC<HomeProps> = ({setPage, x, y}) => {
  return (
    <>
      <ArrowCursor x={x} y={y}/>
      <div className='title-screen-wrapper'>
        <h1 className='name-title first-name'>Andrew</h1>
        <div className="all-links">
          <button className='subpage-link special-text' onClick={()=>setPage("Nike")}>NIKE WORK.</button>
          <button className='subpage-link special-text' onClick={()=>setPage("Creative")}>CREATIVE PROJECTS.</button>
          <button className='subpage-link special-text' onClick={()=>setPage("Me")}>ABOUT ME.</button>
        </div>
        <h1 className='name-title last-name'>Bass</h1>
      </div>
    </>
  );
}