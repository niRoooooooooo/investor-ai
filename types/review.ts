// Provisional UI contract. Will be revised when the backend is planned.

import { VerdictType } from './verdict';
import { Clause } from './clause';
import { Flag } from './flag';
import { ExecutionChecklistItem } from './checklist';

export interface VitalTerms {
  monthlyRent: number;
  monthlyRentFormatted: string;
  securityDeposit: number;
  securityDepositFormatted: string;
  securityDepositMonths: number;
  securityDepositAlertEn?: string;
  securityDepositAlertBn?: string;
  termMonths: number;
  startDate: string;
  endDate: string;
  agreementDate: string;
  location: string;
  firstParty: {
    name: string;
    roleEn: string;
    roleBn: string;
    nid: string;
  };
  secondParty: {
    name: string;
    roleEn: string;
    roleBn: string;
    nid: string;
  };
  isSample: true;
}

export interface Review {
  id: string;
  titleEn: string;
  titleBn: string;
  documentType: string;
  documentTypeBn: string;
  fileName: string;
  fileSize: string;
  pageCount: number;
  evaluatedDate: string;
  userRole: 'tenant' | 'landlord';
  verdict: VerdictType;
  healthScore: number; // 0-100
  lawMatchScore: number; // e.g. 98
  redFlagCount: number;
  greenFlagCount: number;
  missingClauseCount: number;
  vitalTerms: VitalTerms;
  clauses: Clause[];
  flags: Flag[];
  missingClauses: {
    id: string;
    titleEn: string;
    titleBn: string;
    descriptionEn: string;
    descriptionBn: string;
    importance: 'high' | 'medium';
    suggestedClauseEn: string;
    isSample: true;
  }[];
  checklist: ExecutionChecklistItem[];
  isSample: true;
}
