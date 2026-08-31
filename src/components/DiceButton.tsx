import React from 'react';

interface DiceButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export const DiceButton: React.FC<DiceButtonProps> = ({ onClick, isLoading }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isLoading}
      aria-label="Get a new piece of advice"
      className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#52ffa8] hover:shadow-[0_0_30px_#52ffa8] flex items-center justify-center transition-all duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-[#52ffa8]/50 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
    >
      <img
        src="/images/icon-dice.svg"
        alt=""
        className={`w-6 h-6 transition-transform duration-300 ${isLoading ? 'animate-spin' : ''}`}
      />
    </button>
  );
};