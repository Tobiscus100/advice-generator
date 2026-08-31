import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AdviceCard } from './components/AdviceCard';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
    },
  },
});

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen bg-[#1f2632] flex items-center justify-center p-4">
        <AdviceCard />
      </main>
    </QueryClientProvider>
  );
};

export default App;