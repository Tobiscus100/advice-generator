import { AdviceResponse, AdviceSlip } from '../types/advice';

export const fetchAdvice = async (): Promise<AdviceSlip> => {
  // Adding timestamp query param bypasses CDN/browser caching on each request
  const response = await fetch(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch advice (Status: ${response.status})`);
  }

  const data: AdviceResponse = await response.json();
  return data.slip;
};