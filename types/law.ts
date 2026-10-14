// Provisional UI contract. Will be revised when the backend is planned.

export interface LawReference {
  id: string;
  actTitleEn: string;
  actTitleBn: string;
  actNumber: string;
  section: string;
  sectionTitleEn: string;
  sectionTitleBn: string;
  summaryEn: string;
  summaryBn: string;
  statutoryQuoteEn: string;
  statutoryQuoteBn?: string;
  courtPrecedents: {
    title: string;
    citation: string;
    principle: string;
    isSample: true; // Sample precedent flag - not verified by an attorney
  }[];
  practicalImplicationEn: string;
  practicalImplicationBn: string;
  isSample: true; // Sample citation flag - not verified by an attorney
}
