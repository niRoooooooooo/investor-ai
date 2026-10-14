// Provisional UI contract. Will be revised when the backend is planned.

import { VerdictType } from './verdict';

export interface DocumentItem {
  id: string;
  titleEn: string;
  titleBn: string;
  category: 'house_rent' | 'employment' | 'service';
  categoryLabelEn: string;
  categoryLabelBn: string;
  verdict: VerdictType;
  stampDutyAmount: number; // e.g. 300 (isSample: true)
  dateLabel: string;
  monthlyRentOrValue?: string;
  termMonths?: number;
  redFlagCount: number;
  fileName: string;
  fileSize: string;
  isSample: true;
}

export type DocumentFilter = 'all' | 'house_rent' | 'employment' | 'service' | 'high_risk' | 'consult_lawyer';
export type DocumentSort = 'recent' | 'risk' | 'title' | 'health';
