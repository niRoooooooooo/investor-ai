// Provisional UI contract. Will be revised when the backend is planned.

import { LawReference } from './law';

export type FlagSeverity = 'red' | 'amber' | 'green';

export interface Flag {
  id: string;
  clauseId: string;
  severity: FlagSeverity;
  category: string;
  categoryBn: string;
  titleEn: string;
  titleBn: string;
  riskPercent?: number;
  issueSummaryEn: string;
  issueSummaryBn: string;
  aiSuggestedWordingEn?: string;
  aiSuggestedWordingBn?: string;
  applicableLaw?: LawReference;
  isSample: true; // Sample finding flag
}
