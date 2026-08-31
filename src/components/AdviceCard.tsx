import React from 'react';
import { useAdvice } from '../hooks/useAdvice';
import { AdviceDivider } from './AdviceDivider';
import { DiceButton } from './DiceButton';

export const AdviceCard: React.FC = () => {
  const { data, isLoading, isFetching, isError, refetch } = useAdvice();

  return (
    <main className="w-full max-w-[540px] bg-[#323a49] rounded-2xl px-6 pt-10 pb-16 md:px-12 md:pt-12 md:pb-18 text-center relative shadow-2xl mx-4">
      <header>
        <p className="text-[#52ffa8] text-xs md:text-[13px] font-extrabold tracking-[0.28em] uppercase mb-6">
          {isLoading ? 'Loading...' : `Advice #${data?.id ?? '---'}`}
        </p>
      </header>

      <div aria-live="polite" className="min-h-[100px] flex items-center justify-center">
        {isError ? (
          <p className="text-rose-400 text-lg font-medium">
            Could not retrieve advice. Please try again.
          </p>
        ) : isLoading ? (
          <p className="text-[#cee3e9]/50 text-xl font-bold animate-pulse">
            Fetching wisdom...
          </p>
        ) : (
          <blockquote className="text-[#cee3e9] text-[24px] md:text-[28px] leading-[1.35] font-extrabold">
            “{data?.advice}”
          </blockquote>
        )}
      </div>

      <AdviceDivider />

      <DiceButton onClick={() => refetch()} isLoading={isFetching} />
    </main>
  );
};