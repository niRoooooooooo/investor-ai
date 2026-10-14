// SAMPLE MOCK DATA: For UI simulation and pair-programming preview.
// Not verified by an attorney. All legal values marked with isSample: true.

import { Review } from '@/types/review';
import { SAMPLE_LAWS } from './sample-laws';

export const GULSHAN_RENT_REVIEW_DEFAULT: Review = {
  id: 'rev-gulshan-4b-2024',
  titleEn: 'Residential Flat Rental Agreement - Gulshan 2 (Flat 4B)',
  titleBn: 'আবাসিক ফ্ল্যাট ভাড়া চুক্তিপত্র - গুলশান ২ (ফ্ল্যাট ৪বি)',
  documentType: 'House Rent Agreement',
  documentTypeBn: 'আবাসিক বাড়ি ভাড়া চুক্তিপত্র',
  fileName: 'Dhaka_Gulshan_Flat_Rental_Agreement_2024.pdf',
  fileSize: '2.4 MB',
  pageCount: 4,
  evaluatedDate: '1 November 2024',
  userRole: 'tenant',
  verdict: 'NEEDS_CHANGES',
  healthScore: 62,
  lawMatchScore: 98,
  redFlagCount: 3,
  greenFlagCount: 4,
  missingClauseCount: 2,
  vitalTerms: {
    monthlyRent: 45000,
    monthlyRentFormatted: '৳ 45,000',
    securityDeposit: 135000,
    securityDepositFormatted: '৳ 135,000',
    securityDepositMonths: 3,
    securityDepositAlertEn: 'Sec 10, Premises Rent Control Act 1991 restricts advance beyond 1 month.',
    securityDepositAlertBn: 'বাড়ি ভাড়া নিয়ন্ত্রণ আইন ১৯৯১ এর ধারা ১০ অনুযায়ী ১ মাসের অধিক অগ্রিম সীমাবদ্ধ।',
    termMonths: 11,
    startDate: '1 Nov 2024',
    endDate: '30 Sep 2025',
    agreementDate: '1 November 2024',
    location: 'Flat 4B, House 12, Road 71, Gulshan-2, Dhaka',
    firstParty: {
      name: 'Md. Zahirul Islam',
      roleEn: 'Landlord / First Party',
      roleBn: 'বাড়িওয়ালা / প্রথম পক্ষ',
      nid: '19822692500000001',
    },
    secondParty: {
      name: 'Tanvir Ahmed',
      roleEn: 'Tenant / Second Party',
      roleBn: 'ভাড়াটিয়া / দ্বিতীয় পক্ষ',
      nid: '19932692500000042',
    },
    isSample: true,
  },
  clauses: [
    {
      id: 'doc-clause-1',
      clauseNumber: 1,
      titleEn: 'Clause 1: Monthly Rent Payment Schedule',
      titleBn: 'ধারা ১: মাসিক ভাড়া পরিশোধের শর্ত',
      contentEn:
        '1. The Tenant shall pay a monthly rental fee of BDT 45,000/- (Forty Five Thousand Taka) payable on or before the 7th day of each calendar month directly into the Landlord’s designated bank account.',
      contentBn:
        '১. ভাড়াটিয়া প্রতি ইংরেজি মাসের ৭ তারিখের মধ্যে মাসিক ভাড়া বাবদ ৪৫,০০০/- (পঁয়তাল্লিশ হাজার টাকা) বাড়িওয়ালার নির্দিষ্ট ব্যাংক হিসাবে পরিশোধ করবেন।',
      severity: 'green',
      isSample: true,
    },
    {
      id: 'doc-clause-2',
      clauseNumber: 2,
      titleEn: 'Clause 2: Advance & Security Deposit Requirement',
      titleBn: 'ধারা ২: অগ্রিম ও জামানতের পরিমাণ',
      contentEn:
        '2. The Tenant shall deposit an advance security amount of BDT 135,000/- (One Lakh Thirty Five Thousand Taka), equal to three (3) months of rent, which shall be retained non-interest bearing by the Landlord and forfeited unconditionally if any covenant is breached.',
      contentBn:
        '২. ভাড়াটিয়া অগ্রিম জামানত বাবদ ৩ মাসের সমপরিমাণ অর্থাৎ ১,৩৫,০০০/- (এক লক্ষ পঁয়ত্রিশ হাজার টাকা) প্রদান করবেন, যা কোনো শর্ত লঙ্ঘন হলে বাড়িওয়ালা নিঃশর্তভাবে বাজেয়াপ্ত করতে পারবেন।',
      severity: 'red',
      flagId: 'flag-deposit-forfeit',
      isSample: true,
    },
    {
      id: 'doc-clause-3',
      clauseNumber: 3,
      titleEn: 'Clause 3: Termination & Immediate Vacation Notice',
      titleBn: 'ধারা ৩: চুক্তি সমাপ্তি ও তাত্ক্ষণিক নোটিশ',
      contentEn:
        '3. The Landlord reserves the unilateral right to terminate this tenancy upon giving seven (7) days written notice without assigning any reason, and may enter and change door locks without Court order.',
      contentBn:
        '৩. বাড়িওয়ালা কোনো কারণ দর্শানো ব্যতিরেকে মাত্র ৭ দিনের লিখিত নোটিশে চুক্তি বাতিল করে তালা পরিবর্তন ও সরাসরি দখল গ্রহণের অধিকার সংরক্ষণ করেন।',
      severity: 'red',
      flagId: 'flag-immediate-eviction',
      isSample: true,
    },
    {
      id: 'doc-clause-4',
      clauseNumber: 4,
      titleEn: 'Clause 4: Structural Repair and Maintenance',
      titleBn: 'ধারা ৪: রক্ষণাবেক্ষণ ও কাঠামোগত মেরামত',
      contentEn:
        '4. All repair and maintenance works whatsoever, including roof leaks, plumbing mains, structural damages, and exterior fixtures, shall be repaired solely at the Tenant’s personal cost.',
      contentBn:
        '৪. ছাদের জলরোধী মেরামত, প্রধান পাইপলাইন ও ভবনের সমস্ত কাঠামোগত মেরামতের সম্পূর্ণ খরচ এককভাবে ভাড়াটিয়া বহন করবেন।',
      severity: 'red',
      flagId: 'flag-structural-repairs',
      isSample: true,
    },
    {
      id: 'doc-clause-5',
      clauseNumber: 5,
      titleEn: 'Clause 5: Permitted Residential Use',
      titleBn: 'ধারা ৫: আবাসিক ব্যবহারের শর্ত',
      contentEn:
        '5. The demised flat shall be used exclusively for residential purposes by the Tenant and his immediate family members, and no commercial, offensive, or hazardous activities shall take place on the premises.',
      contentBn:
        '৫. উক্ত ফ্ল্যাটটি শুধুমাত্র ভাড়াটিয়া ও তাহার পরিবারের আবাসিক বসবাসের জন্য ব্যবহৃত হইবে এবং কোনো বাণিজ্যিক বা ঝুঁকিপূর্ণ কাজে ব্যবহার করা যাইবে না।',
      severity: 'green',
      isSample: true,
    },
  ],
  flags: [
    {
      id: 'flag-deposit-forfeit',
      clauseId: 'doc-clause-2',
      severity: 'red',
      category: 'Unlawful Deposit Advance',
      categoryBn: 'অবৈধ জামানত ও অগ্রিম',
      titleEn: 'Excessive Advance Deposit & Unilateral Forfeiture',
      titleBn: 'অতিরিক্ত অগ্রিম জামানত ও বাজেয়াপ্তকরণ শর্ত',
      riskPercent: 96,
      issueSummaryEn:
        'Premises Rent Control Act 1991, Section 10 prohibits advance rent exceeding 1 month. The agreement demands 3 months (BDT 135,000) and includes automatic forfeiture without damage assessment.',
      issueSummaryBn:
        'বাড়ি ভাড়া নিয়ন্ত্রণ আইন ১৯৯১ এর ধারা ১০ অনুযায়ী ১ মাসের বেশি অগ্রিম নেওয়া নিষিদ্ধ। চুক্তিতে ৩ মাস দাবি করা হয়েছে এবং সরাসরি বাজেয়াপ্তের শর্ত দেওয়া হয়েছে।',
      aiSuggestedWordingEn:
        '"The Tenant shall deposit a sum equivalent to 01 (one) month’s rent (BDT 45,000/-) as refundable security deposit, returned within 15 days upon expiry of tenancy and settlement of verified electric/gas dues."',
      aiSuggestedWordingBn:
        '“ভাড়াটিয়া ফেরতযোগ্য জামানত বাবদ ০১ (এক) মাসের ভাড়ার সমপরিমাণ (৪৫,০০০/- টাকা) প্রদান করবেন, যা চুক্তি সমাপ্তি ও ইউটিলিটি বিল সমন্বয়ের ১৫ দিনের মধ্যে সম্পূর্ণ ফেরতযোগ্য হইবে।”',
      applicableLaw: SAMPLE_LAWS.sec10_rent_control_1991,
      isSample: true,
    },
    {
      id: 'flag-immediate-eviction',
      clauseId: 'doc-clause-3',
      severity: 'red',
      category: 'Arbitrary Eviction',
      categoryBn: 'স্বেচ্ছাচারী উচ্ছেদ শর্ত',
      titleEn: 'Arbitrary 7-Day Immediate Eviction Clause',
      titleBn: 'মাত্র ৭ দিনের নোটিশে উচ্ছেদ ও জবরদখল ধারা',
      riskPercent: 92,
      issueSummaryEn:
        'Under Section 106 of the Transfer of Property Act 1882, a periodic tenancy requires a minimum of 15 to 30 days notice. Unilateral lock changing without Rent Controller decree constitutes illegal dispossession.',
      issueSummaryBn:
        'সম্পত্তি হস্তান্তর আইনের ১০৬ ধারা এবং বাড়ি ভাড়া নিয়ন্ত্রণ আইন অনুসারে অন্তত ৩০ দিনের নোটিশ ব্যতিরেকে কোনো উচ্ছেদ কার্যকর করা যায় না। তালা পরিবর্তনের শর্ত বেআইনি।',
      aiSuggestedWordingEn:
        '"Either party may terminate this Tenancy Agreement by serving a minimum of 30 (thirty) days written notice to the other party. Eviction shall only occur through due process of law."',
      aiSuggestedWordingBn:
        '“যেকোনো পক্ষ অপর পক্ষকে ন্যূনতম ৩০ (ত্রিশ) দিনের লিখিত নোটিশ প্রদান করিয়া এই চুক্তি সমাপ্ত করিতে পারিবেন। আইনানুগ বিচারিক প্রক্রিয়া ব্যতীত কোনো উচ্ছেদ সম্পন্ন করা যাইবে না।”',
      applicableLaw: SAMPLE_LAWS.sec106_tp_act_1882,
      isSample: true,
    },
    {
      id: 'flag-structural-repairs',
      clauseId: 'doc-clause-4',
      severity: 'red',
      category: 'Repair Liability',
      categoryBn: 'মেরামতের একতরফা দায়',
      titleEn: 'Shift of Major Structural Repair Liability to Tenant',
      titleBn: 'মূল কাঠামোগত মেরামতের দায় ভাড়াটীয়ার ওপর অর্পণ',
      riskPercent: 70,
      issueSummaryEn:
        'Premises Rent Control Act Section 17 stipulates that roof, structural beam, and major sanitary defects remain the non-delegable responsibility of the building owner.',
      issueSummaryBn:
        'বাড়ি ভাড়া নিয়ন্ত্রণ আইনের ১৭ ধারা অনুযায়ী ছাদ ও ভবনের বাহ্যিক কাঠামোর বড় ত্রুটি মেরামত করা বাড়িওয়ালার আইনি বাধ্যবাধকতা।',
      aiSuggestedWordingEn:
        '"The Landlord shall be responsible for all major structural repairs, including roof leakage, main water supply, and electrical risers. Tenant shall only bear minor day-to-day internal consumable maintenance."',
      aiSuggestedWordingBn:
        '“বাড়িওয়ালা ভবনের ছাদ, পানি ও প্রধান বিদ্যুৎ লাইনের যাবতীয় মূল কাঠামোগত মেরামতের ব্যয় বহন করবেন। ভাড়াটিয়া কেবল অভ্যন্তরীণ নিত্যব্যবহার্য ছোটখাট রক্ষণাবেক্ষণ করবেন।”',
      applicableLaw: SAMPLE_LAWS.sec17_rent_control_1991,
      isSample: true,
    },
    {
      id: 'flag-rent-schedule',
      clauseId: 'doc-clause-1',
      severity: 'green',
      category: 'Rent Payment',
      categoryBn: 'ভাড়া প্রদান',
      titleEn: 'Clear Monthly Rent & Due Date Provision',
      titleBn: 'সুনির্দিষ্ট মাসিক ভাড়া ও পরিশোধের সময়সীমা',
      riskPercent: 10,
      issueSummaryEn:
        'Clause clearly states fixed monthly rent and 7th day payment deadline via bank transfer, providing transparent accounting.',
      issueSummaryBn:
        'চুক্তিতে মাসিক নির্দিষ্ট ভাড়া এবং প্রতি মাসের ৭ তারিখের মধ্যে ব্যাংক ট্রান্সফারের পরিষ্কার উল্লেখ রয়েছে।',
      isSample: true,
    },
    {
      id: 'flag-residential-use',
      clauseId: 'doc-clause-5',
      severity: 'green',
      category: 'Permitted Use',
      categoryBn: 'ব্যবহারের উদ্দেশ্য',
      titleEn: 'Protected Residential Use Clause',
      titleBn: 'নিরাপদ আবাসিক ব্যবহারের স্পষ্টীকরণ',
      riskPercent: 12,
      issueSummaryEn:
        'Explicit residential designation protects both parties from zoning complications and tax misclassifications under municipal rules.',
      issueSummaryBn:
        'সুনির্দিষ্ট আবাসিক ব্যবহার সিটি কর্পোরেশনের ট্যাক্স ও বাণিজ্যিক বিধিনিষেধ সংক্রান্ত জটিলতা থেকে উভয় পক্ষকে সুরক্ষা দেয়।',
      isSample: true,
    },
  ],
  missingClauses: [
    {
      id: 'missing-deposit-receipt',
      titleEn: 'Mandatory Written Rent & Deposit Receipt Clause',
      titleBn: 'লিখিত ভাড়া ও জামানত রসিদ প্রদানের বাধ্যবাধকতা',
      descriptionEn:
        'Under Section 13 of Premises Rent Control Act, 1991, the landlord is statutorily obligated to issue a signed written receipt upon receiving rent or deposit.',
      descriptionBn:
        'বাড়ি ভাড়া নিয়ন্ত্রণ আইনের ১৩ ধারা অনুযায়ী ভাড়া বা অগ্রিম গ্রহণের পর বাড়িওয়ালা লিখিত রসিদ প্রদান করতে বাধ্য।',
      importance: 'high',
      suggestedClauseEn:
        '"The Landlord shall immediately issue a signed written receipt to the Tenant acknowledging receipt of rent and deposit payments."',
      isSample: true,
    },
    {
      id: 'missing-quiet-enjoyment',
      titleEn: 'Tenant Quiet Enjoyment & Non-Intrusion Warranty',
      titleBn: 'শান্তিপূর্ণ বসবাসের অধিকার ও অনধিকার প্রবেশ নিষেধাজ্ঞা',
      descriptionEn:
        'Prevents landlord from entering flat without 24 hours prior written consent except in emergencies.',
      descriptionBn:
        'জরুরি অবস্থা ব্যতীত ২৪ ঘণ্টার পূর্ব নোটিশ ছাড়া বাড়িওয়ালার ফ্ল্যাটে প্রবেশ নিষিদ্ধ করার ধারা।',
      importance: 'medium',
      suggestedClauseEn:
        '"The Tenant shall have peaceful and uninterrupted possession of the flat without unreasonable interference by the Landlord."',
      isSample: true,
    },
  ],
  checklist: [
    {
      id: 'check-stamp-duty',
      titleEn: 'Stamp Duty Valuation',
      titleBn: 'স্ট্যাম্প ডিউটি ও নন-জুডিশিয়াল স্ট্যাম্প',
      requirementEn: '৳300 Non-Judicial Stamp paper under The Stamp Act 1899.',
      requirementBn: 'স্ট্যাম্প অ্যাক্ট ১৮৯৯ এর অধীনে ৩০০ টাকার নন-জুডিশিয়াল স্ট্যাম্প।',
      statusTextEn: 'Validated ৳300 Stamp value',
      statusTextBn: '৩০০ টাকার স্ট্যাম্প নিশ্চিত',
      statusType: 'required',
      icon: 'receipt_long',
      isCompliant: true,
      sampleNote: 'Sample Stamp Duty calculation for 11-month lease under ৳100,000 monthly value.',
      isSample: true,
    },
    {
      id: 'check-witnesses',
      titleEn: '2 Adult Witnesses',
      titleBn: '২ জন প্রাপ্তবয়স্ক সাক্ষীর স্বাক্ষর',
      requirementEn: 'Signatures accompanied by verified 10-digit / 17-digit NID copies.',
      requirementBn: '১০ বা ১৭ সংখ্যার এনআইডি কার্ডের অনুলিপিসহ দুইজন প্রাপ্তবয়স্কের স্বাক্ষর।',
      statusTextEn: 'Missing Counterparty NID copy',
      statusTextBn: 'দ্বিতীয় পক্ষের এনআইডি কপি সংযুক্ত নেই',
      statusType: 'required',
      icon: 'group',
      isCompliant: false,
      sampleNote: 'Requirement per Registration Act standards.',
      isSample: true,
    },
    {
      id: 'check-notary',
      titleEn: 'Notary Public Attestation',
      titleBn: 'নোটারি পাবলিক কর্তৃক সত্যায়ন',
      requirementEn: 'Attestation by First Class Magistrate or Registered Notary.',
      requirementBn: 'প্রথম শ্রেণীর ম্যাজিস্ট্রেট বা নিবন্ধিত নোটারি পাবলিক দ্বারা সত্যায়ন।',
      statusTextEn: 'Optional for leases under 11 months',
      statusTextBn: '১১ মাসের কম মেয়াদের জন্য ঐচ্ছিক',
      statusType: 'optional',
      icon: 'history_edu',
      isCompliant: true,
      sampleNote: 'Recommended practice for evidentiary weight in Court proceedings.',
      isSample: true,
    },
  ],
  isSample: true,
};

// Preset reviews for the 3 other verdict states
export const GULSHAN_VERDICT_LOOKS_FINE: Review = {
  ...GULSHAN_RENT_REVIEW_DEFAULT,
  id: 'rev-gulshan-looks-fine',
  verdict: 'LOOKS_FINE',
  healthScore: 94,
  lawMatchScore: 99,
  redFlagCount: 0,
  greenFlagCount: 6,
  missingClauseCount: 0,
  flags: GULSHAN_RENT_REVIEW_DEFAULT.flags.filter((f) => f.severity === 'green'),
};

export const GULSHAN_VERDICT_HIGH_RISK: Review = {
  ...GULSHAN_RENT_REVIEW_DEFAULT,
  id: 'rev-gulshan-high-risk',
  verdict: 'HIGH_RISK',
  healthScore: 32,
  lawMatchScore: 65,
  redFlagCount: 5,
  greenFlagCount: 1,
  missingClauseCount: 3,
};

export const GULSHAN_VERDICT_CONSULT_LAWYER: Review = {
  ...GULSHAN_RENT_REVIEW_DEFAULT,
  id: 'rev-gulshan-consult-lawyer',
  verdict: 'CONSULT_LAWYER',
  healthScore: 48,
  lawMatchScore: 78,
  redFlagCount: 3,
  greenFlagCount: 3,
  missingClauseCount: 2,
};
