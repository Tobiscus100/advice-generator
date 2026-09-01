import React from 'react';
import dividerDesktop from '../../images/pattern-divider-desktop.svg'; 
import dividerMobile from '../../images/pattern-divider-mobile.svg';     

export const AdviceDivider: React.FC = () => {
  return (
    <div className="w-full my-6 flex items-center justify-center" aria-hidden="true">
      <picture className="w-full flex justify-center">
        <source media="(min-width: 640px)" srcSet={dividerDesktop} />
        <img src={dividerMobile} alt="" className="w-full max-w-[444px]" />
      </picture>
    </div>
  );
};