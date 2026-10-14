// SAMPLE DATA: These statutory references and legal summaries are sample demonstrations
// for UI simulation purposes and have not been verified by a licensed attorney.

import { LawReference } from '@/types/law';

export const SAMPLE_LAWS: Record<string, LawReference> = {
  sec10_rent_control_1991: {
    id: 'sec10_rent_control_1991',
    actTitleEn: 'The Premises Rent Control Act, 1991',
    actTitleBn: 'বাড়ি ভাড়া নিয়ন্ত্রণ আইন, ১৯৯১',
    actNumber: 'Act No. III of 1991',
    section: 'Section 10',
    sectionTitleEn: 'Restriction on Premium, Salami, Fine, or Advance Rent',
    sectionTitleBn: 'প্রিমিয়াম, সেলামি বা অগ্রিম ভাড়া গ্রহণে বিধিনিষেধ',
    summaryEn:
      'Under Section 10 of the Premises Rent Control Act, 1991, a landlord cannot demand or receive any premium, salami, fine, or advance rent exceeding one month’s rent as a condition of the grant, renewal, or continuance of a tenancy.',
    summaryBn:
      'বাড়ি ভাড়া নিয়ন্ত্রণ আইন, ১৯৯১ এর ১০ ধারা অনুযায়ী, কোনো বাড়িওয়ালা ভাড়া দেওয়ার শর্ত হিসেবে এক মাসের বেশি অগ্রিম ভাড়া, সেলামি বা প্রিমিয়াম দাবি বা গ্রহণ করতে পারবেন না।',
    statutoryQuoteEn:
      '"No landlord shall claim, demand or receive any premium, salami, fine or any other like sum in addition to the rent, or the payment of any sum exceeding one month’s rent in advance as a condition of the grant, renewal or continuance of a tenancy of any premises."',
    statutoryQuoteBn:
      '“কোনো বাড়িওয়ালা কোনো প্রাঙ্গণের ভাড়া প্রদান, নবায়ন বা অব্যাহত রাখার শর্ত হিসেবে ভাড়ার অতিরিক্ত কোনো প্রিমিয়াম, সেলামি বা জরিমানা দাবি বা গ্রহণ করবেন না, কিংবা এক মাসের বেশি অগ্রিম ভাড়া গ্রহণ করবেন না।”',
    courtPrecedents: [
      {
        title: 'Rahim vs. Chowdhury (Dhaka Division)',
        citation: 'Sample Precedent (52 DLR 214)',
        principle:
          'Security deposits collected under the guise of damage reserves exceeding statutory limits are treated as unlawful advances under Section 10.',
        isSample: true,
      },
    ],
    practicalImplicationEn:
      'If your agreement requires 3 months of security deposit or advance rent, the excess 2 months can be challenged or adjusted against ongoing rent before a Rent Controller.',
    practicalImplicationBn:
      'যদি চুক্তিতে ৩ মাসের অগ্রিম বা জামানত চাওয়া হয়, তবে অতিরিক্ত ২ মাস ভাড়া হিসেবে সমন্বয় বা ভাড়া নিয়ন্ত্রকের কাছে প্রতিকার চাওয়া যেতে পারে।',
    isSample: true,
  },

  sec106_tp_act_1882: {
    id: 'sec106_tp_act_1882',
    actTitleEn: 'Transfer of Property Act, 1882',
    actTitleBn: 'সম্পত্তি হস্তান্তর আইন, ১৮৮২',
    actNumber: 'Act No. IV of 1882',
    section: 'Section 106',
    sectionTitleEn: 'Duration of Certain Leases in Absence of Written Contract',
    sectionTitleBn: 'চুক্তির অবর্তমানে নির্দিষ্ট ইজারার মেয়াদ ও নোটিশ',
    summaryEn:
      'Section 106 establishes that in the absence of a contract or local law to the contrary, a lease of immovable property for any purpose other than agriculture or manufacturing is terminable on the part of either lessor or lessee by fifteen (or thirty) days notice expiring with the end of a month of the tenancy.',
    summaryBn:
      '১৮৮২ সালের সম্পত্তি হস্তান্তর আইনের ১০৬ ধারা অনুসারে, যেকোনো আবাসিক বা অ-উৎপাদনমুখী ভাড়ার ক্ষেত্রে যুক্তিসঙ্গত লিখিত নোটিশ ব্যতীত কাউকে উচ্ছেদ বা ত্যাগ করতে বাধ্য করা যায় না।',
    statutoryQuoteEn:
      '"In the absence of a contract or local law or usage to the contrary, a lease of immovable property for agricultural or manufacturing purposes shall be deemed to be a lease from year to year... and a lease of immovable property for any other purpose shall be deemed to be a lease from month to month, terminable, on the part of either lessor or lessee, by fifteen days’ notice."',
    courtPrecedents: [
      {
        title: 'Hassan vs. Bangladesh Trading Corp.',
        citation: 'Sample Precedent (39 DLR 142)',
        principle:
          'Clauses granting landlords immediate right of unilateral re-entry without written notice violate principles of natural justice and public policy.',
        isSample: true,
      },
    ],
    practicalImplicationEn:
      'Clauses allowing the landlord to evict within 7 days without judicial process are invalid. Standard practice in Bangladesh requires 30 days written notice.',
    practicalImplicationBn:
      '৭ দিনের মধ্যে উচ্ছেদের একতরফা শর্ত আইনত কার্যকর নয়। বাংলাদেশে স্বাভাবিকভাবে ৩০ দিনের লিখিত নোটিশ প্রয়োজন।',
    isSample: true,
  },

  sec17_rent_control_1991: {
    id: 'sec17_rent_control_1991',
    actTitleEn: 'The Premises Rent Control Act, 1991',
    actTitleBn: 'বাড়ি ভাড়া নিয়ন্ত্রণ আইন, ১৯৯১',
    actNumber: 'Act No. III of 1991',
    section: 'Section 17',
    sectionTitleEn: 'Obligation of Landlord to Carry Out Structural Repairs',
    sectionTitleBn: 'কাঠামোগত মেরামতে বাড়িওয়ালার দায়িত্ব',
    summaryEn:
      'Section 17 establishes that structural repairs, major roof water-proofing, and external plumbing remain the statutory duty of the landlord.',
    summaryBn:
      '১৭ ধারা অনুযায়ী ছাদ, মূল দেওয়াল ও বাহ্যিক পাইপলাইনের কাঠামোগত রক্ষণাবেক্ষণের প্রাথমিক দায়িত্ব বাড়িওয়ালার।',
    statutoryQuoteEn:
      '"Every landlord shall be bound to keep the premises in good and tenantable repair and to carry out all necessary major structural repairs."',
    courtPrecedents: [
      {
        title: 'Aminul Islam vs. Landlord Board',
        citation: 'Sample Precedent (45 DLR 89)',
        principle:
          'A tenant cannot be forced to absorb wear-and-tear or building-wide structural degradation.',
        isSample: true,
      },
    ],
    practicalImplicationEn:
      'Do not agree to absorb structural or major fixture repairs. Tenant responsibility should be strictly limited to internal minor maintenance caused by daily use.',
    practicalImplicationBn:
      'কাঠামোগত বড় মেরামতের দায়িত্ব ভাড়াটীয়ার ওপর চাপানো যাবে না। কেবল অভ্যন্তরীণ সাধারণ ব্যবহারের ক্ষতি ভাড়াটীয়া বহন করবেন।',
    isSample: true,
  },
};
