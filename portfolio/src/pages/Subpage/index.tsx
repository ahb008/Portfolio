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
a
          </div>
          <div className="description-wrapper">

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