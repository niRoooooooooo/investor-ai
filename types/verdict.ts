// Provisional UI contract. Will be revised when the backend is planned.

export type VerdictType = 'LOOKS_FINE' | 'NEEDS_CHANGES' | 'HIGH_RISK' | 'CONSULT_LAWYER';

export interface VerdictConfig {
  type: VerdictType;
  labelEn: string;
  labelBn: string;
  descriptionEn: string;
  descriptionBn: string;
  score: number;
  textColor: string;
  bgColor: string;
  borderColor: string;
  icon: string;
}
