export interface AdviceSlip {
  id: number;
  advice: string;
}

export interface AdviceResponse {
  slip: AdviceSlip;
}