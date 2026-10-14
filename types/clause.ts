// Provisional UI contract. Will be revised when the backend is planned.

import { FlagSeverity } from './flag';

export interface Clause {
  id: string;
  clauseNumber: number;
  titleEn: string;
  titleBn: string;
  contentEn: string;
  contentBn?: string;
  severity: FlagSeverity;
  flagId?: string;
  isSample: true;
}
