import React from 'react';
import './subpage.scss';
import { XCursor } from '../../components/Cursors/XCursor';

interface SubpageProps {
  setPage: (page: string) => void;
}

export const Subpage: React.FC<SubpageProps> = ({setPage}) => {
  return (
    <>
      <XCursor setPage={setPage}/>
      <div className="subpage-wrapper">
        <div className="left-column">
          <div className="title-wrapper">
            <h1 className="title">Andrew Bass.</h1>
            <h2 className="subtitle">that's me!</h2>
          </div>
          <div className="description-wrapper">
            <p className="description">Bingo bango bongo</p>
          </div>
        </div>
        <div className="right-column">
          <div className="image-wrapper">
          </div>
        </div>
      </div>
    </>
  );
}