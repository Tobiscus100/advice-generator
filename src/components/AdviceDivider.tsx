import React from 'react';

export const AdviceDivider: React.FC = () => {
  return (
    <div className="w-full my-6 flex items-center justify-center" aria-hidden="true">
      <picture className="w-full flex justify-center">
        <source media="(min-width: 640px)" srcSet="/images/pattern-divider-desktop.svg" />
        <img src="/images/pattern-divider-mobile.svg" alt="" className="w-full max-w-[444px]" />
      </picture>
    </div>
  );
};