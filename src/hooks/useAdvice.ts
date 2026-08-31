import { useQuery } from '@tanstack/react-query';
import { fetchAdvice } from '../services/adviceApi';
import { AdviceSlip } from '../types/advice';

export const useAdvice = () => {
  return useQuery<AdviceSlip, Error>({
    queryKey: ['advice'],
    queryFn: fetchAdvice,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
};