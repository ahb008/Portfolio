import React from 'react';

interface Context {
  hovering: boolean;
  setHovering: (hovering: boolean) => void;
}

const SiteContext = React.createContext<Context | undefined>(undefined);

export default SiteContext;
