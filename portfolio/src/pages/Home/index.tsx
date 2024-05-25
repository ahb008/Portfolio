import React from 'react';
import { ArrowCursor } from '../../components/Cursors/ArrowCursor';
import './home.scss';

interface HomeProps {
  setPage: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({setPage}) => {
  return (
    <>
      <ArrowCursor/>
      <div className='title-screen-wrapper'>
        <h1 className='name-title first-name'>ANDREW</h1>
        <div className="all-links">
          <button className='subpage-link special-text' onClick={()=>setPage("Nike")}>NIKE WORK.</button>
          <button className='subpage-link special-text' onClick={()=>setPage("Creative")}>CREATIVE PROJECTS.</button>
          <button className='subpage-link special-text' onClick={()=>setPage("Me")}>ABOUT ME.</button>
        </div>
        <h1 className='name-title last-name'>BASS</h1>
      </div>
    </>
  );
}