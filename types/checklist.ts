// Provisional UI contract. Will be revised when the backend is planned.

export interface ExecutionChecklistItem {
  id: string;
  titleEn: string;
  titleBn: string;
  requirementEn: string;
  requirementBn: string;
  statusTextEn: string;
  statusTextBn: string;
  statusType: 'required' | 'recommended' | 'optional';
  icon: string;
  isCompliant: boolean;
  sampleNote: string;
  isSample: true; // Sample statutory requirement flag
}
