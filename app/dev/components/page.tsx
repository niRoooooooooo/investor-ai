'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Toggle } from '@/components/ui/toggle';
import { Chip } from '@/components/ui/chip';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { Skeleton } from '@/components/ui/skeleton';
import { ProgressRing } from '@/components/ui/progress-ring';
import { ToastContainer, useToastStore } from '@/components/ui/toast';

import { LanguageToggle } from '@/components/shared/language-toggle';
import { DisclaimerStrip } from '@/components/shared/disclaimer-strip';
import { VerdictBadge } from '@/components/shared/verdict-badge';
import { RiskGauge } from '@/components/shared/risk-gauge';
import { StepBar } from '@/components/shared/step-bar';
import { LawReferenceChip } from '@/components/shared/law-reference-chip';
import { LawDrawer } from '@/components/shared/law-drawer';
import { FlagCard } from '@/components/shared/flag-card';
import { ClauseHeatmapRail } from '@/components/shared/clause-heatmap-rail';
import { EmptyState } from '@/components/shared/empty-state';
import { ErrorState } from '@/components/shared/error-state';

import { SAMPLE_LAWS } from '@/mocks/sample-laws';
import { GULSHAN_RENT_REVIEW_DEFAULT } from '@/mocks/gulshan-rent-agreement';
import { LawReference } from '@/types/law';

export default function DevComponentsPage() {
  const t = useTranslations('brand');
  const tNav = useTranslations('nav');
  const { addToast } = useToastStore();

  const [activeLaw, setActiveLaw] = React.useState<LawReference | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [toggleChecked, setToggleChecked] = React.useState(true);
  const [ringProgress, setRingProgress] = React.useState(65);
  const [activeStep, setActiveStep] = React.useState<1 | 2 | 3>(2);
  const [activeClauseId, setActiveClauseId] = React.useState('doc-clause-2');

  const openLaw = (lawId: string) => {
    setActiveLaw(SAMPLE_LAWS[lawId] || SAMPLE_LAWS.sec10_rent_control_1991);
    setIsDrawerOpen(true);
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-on-surface p-6 sm:p-10 max-w-7xl mx-auto flex flex-col gap-12">
        <ToastContainer />

        {/* Header Showcase */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-container-high">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                Design System Showcase • Step B Complete
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg text-primary font-bold tracking-tight">
              Component &amp; Token Catalog
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Live preview of design tokens, interactive shared components, verdict states, and bilingual i18n.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-surface-container-lowest p-2 rounded-2xl shadow-sm border border-outline-variant/30">
            <span className="font-label-sm text-label-sm text-on-surface-variant px-2 font-medium">
              Toggle Language:
            </span>
            <LanguageToggle size="md" />
          </div>
        </header>

        {/* 1. Brand & Typography */}
        <section className="flex flex-col gap-4">
          <h2 className="font-headline-md text-headline-md text-primary font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">text_fields</span>
            1. Typography &amp; Leading Verification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
            <div className="flex flex-col gap-3">
              <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">
                Latin Script (Inter)
              </span>
              <p className="font-display-lg text-display-lg text-primary font-bold">Display Large 40px</p>
              <p className="font-headline-xl text-headline-xl text-primary font-bold">Headline Extra-Large 32px</p>
              <p className="font-headline-lg text-headline-lg text-primary font-semibold">Headline Large 24px</p>
              <p className="font-headline-md text-headline-md text-primary font-semibold">Headline Medium 20px</p>
              <p className="font-headline-sm text-headline-sm text-on-surface font-semibold">Headline Small 16px</p>
              <p className="font-body-lg text-body-lg text-on-surface">Body Large: Clean statutory paragraph reading with optical line-height.</p>
              <p className="font-body-md text-body-md text-on-surface-variant">Body Medium: Default clause contract text and analytical summaries.</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Body Small: Metadata, statutory timestamps and footnote citations.</p>
            </div>

            <div className="flex flex-col gap-3 font-bengali">
              <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">
                Bangla Script (Noto Sans Bengali, +15% Leading)
              </span>
              <p className="font-display-lg text-display-lg text-primary font-bold">স্বাক্ষরের আগে জানুন</p>
              <p className="font-headline-xl text-headline-xl text-primary font-bold">বাংলাদেশ আইনি পর্যালোচনা এআই</p>
              <p className="font-headline-lg text-headline-lg text-primary font-semibold">বাড়ি ও ফ্ল্যাট ভাড়া সংক্রান্ত চুক্তিপত্র</p>
              <p className="font-headline-md text-headline-md text-primary font-semibold">আবাসিক ইজারা শর্তাবলী ও জামানত</p>
              <p className="font-headline-sm text-headline-sm text-on-surface font-semibold">ধারা ১০: প্রিমিয়াম বা অগ্রিম ভাড়ায় বিধিনিষেধ</p>
              <p className="font-body-lg text-body-lg text-on-surface">
                বাড়ি ভাড়া নিয়ন্ত্রণ আইন ১৯৯১ এর ধারা ১০ অনুযায়ী কোনো বাড়িওয়ালা এক মাসের অধিক অগ্রিম দাবি করতে পারবেন না।
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                স্বেচ্ছাচারী উচ্ছেদ বা তালা পরিবর্তনের শর্ত আইনত বাতিল ও অকার্যকর বলে গণ্য হবে।
              </p>
            </div>
          </div>
        </section>

        {/* 2. Color Palette & Tokens */}
        <section className="flex flex-col gap-4">
          <h2 className="font-headline-md text-headline-md text-primary font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">palette</span>
            2. Core Design Tokens &amp; Semantic Palettes
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {[
              { label: 'Primary', val: '#070235', cls: 'bg-primary text-on-primary' },
              { label: 'Primary Cont.', val: '#1E1B4B', cls: 'bg-primary-container text-on-primary' },
              { label: 'Secondary', val: '#5654A8', cls: 'bg-secondary text-on-secondary' },
              { label: 'Sec. Container', val: '#A7A5FF', cls: 'bg-secondary-container text-primary' },
              { label: 'Background', val: '#FAF8FF', cls: 'bg-background text-on-surface border border-outline-variant/40' },
              { label: 'Surface Low', val: '#F2F3FF', cls: 'bg-surface-container-low text-on-surface' },
              { label: 'Surface High', val: '#E2E7FF', cls: 'bg-surface-container-high text-on-surface' },
              { label: 'Surface Highest', val: '#DAE2FD', cls: 'bg-surface-container-highest text-on-surface' },
              { label: 'Looks Fine (Emerald)', val: '#15803D', cls: 'bg-[#DCFCE7] text-[#15803D]' },
              { label: 'Needs Changes (Amber)', val: '#B45309', cls: 'bg-[#FEF3C7] text-[#B45309]' },
              { label: 'High Risk (Crimson)', val: '#E11D48', cls: 'bg-[#FFE4E6] text-[#E11D48]' },
              { label: 'Consult Lawyer (Indigo)', val: '#4338CA', cls: 'bg-[#EEF2FF] text-[#4338CA]' },
            ].map((col, idx) => (
              <div key={idx} className={`p-4 rounded-xl flex flex-col justify-between h-24 shadow-xs ${col.cls}`}>
                <span className="font-label-sm text-label-sm font-semibold">{col.label}</span>
                <span className="font-mono text-xs opacity-80">{col.val}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Button Primitives */}
        <section className="flex flex-col gap-4">
          <h2 className="font-headline-md text-headline-md text-primary font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">smart_button</span>
            3. Buttons &amp; Micro-Interactions (Lift 2px, Spring Tap)
          </h2>
          <div className="flex flex-wrap items-center gap-4 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
            <Button variant="primary" size="lg">
              <span className="material-symbols-outlined text-[20px]">document_scanner</span>
              <span>Primary Large</span>
            </Button>
            <Button variant="primary" size="md">Primary Medium</Button>
            <Button variant="primary" size="sm">Primary Small</Button>

            <Button variant="secondary" size="md">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>Secondary</span>
            </Button>

            <Button variant="outline" size="md">
              <span className="material-symbols-outlined text-[18px]">play_circle</span>
              <span>Outline</span>
            </Button>

            <Button variant="ghost" size="md">Ghost Button</Button>

            <Button variant="danger" size="md">
              <span className="material-symbols-outlined text-[18px]">delete</span>
              <span>Danger Action</span>
            </Button>

            <Button variant="primary" size="md" disabled>Disabled State</Button>
          </div>
        </section>

        {/* 4. Inputs, Tabs, Toggles, Progress & Tooltip */}
        <section className="flex flex-col gap-4">
          <h2 className="font-headline-md text-headline-md text-primary font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">tune</span>
            4. Form Controls, Radix Tabs, Spring Toggles &amp; Progress Ring
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
            {/* Left col: Inputs & Toggles */}
            <div className="flex flex-col gap-4">
              <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">Inputs &amp; Focus Rings</span>
              <Input placeholder="Enter contract title or clause name..." icon="search" />
              <Input placeholder="Invalid field state example..." error="Required under Section 10 of Premises Rent Control Act" />

              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
                <div>
                  <p className="font-label-md text-label-md text-on-surface font-semibold">Save documents securely in cloud</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Encrypted Bangladesh compliance vault storage</p>
                </div>
                <Toggle checked={toggleChecked} onCheckedChange={setToggleChecked} />
              </div>

              <div className="flex items-center gap-4 pt-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm cursor-help">
                      <span className="material-symbols-outlined text-[16px] text-secondary">help</span>
                      Hover for Tooltip
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    Complies with Bangladesh Evidence Act 1872
                  </TooltipContent>
                </Tooltip>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => addToast({ title: 'Preference Updated', description: 'Changes saved to your profile' })}
                >
                  <span className="material-symbols-outlined text-[16px]">notifications_active</span>
                  <span>Trigger Toast</span>
                </Button>

                {/* Dialog Trigger */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="danger" size="sm">
                      <span className="material-symbols-outlined text-[16px]">warning</span>
                      <span>Open Danger Dialog</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm Account Deletion</DialogTitle>
                      <DialogDescription>
                        This will permanently delete Tanvir Ahmed’s audit records. This action cannot be reversed.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end gap-2 mt-4">
                      <Button variant="outline" size="sm">Cancel</Button>
                      <Button variant="danger" size="sm">Delete Permanently</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Right col: Tabs & Progress Ring */}
            <div className="flex flex-col gap-4">
              <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">Radix Tabs &amp; Animated SVG Rings</span>
              <Tabs defaultValue="upload" className="w-full">
                <TabsList className="w-full grid grid-cols-2">
                  <TabsTrigger value="upload">Upload Agreement File</TabsTrigger>
                  <TabsTrigger value="paste">Paste Text Contract</TabsTrigger>
                </TabsList>
                <TabsContent value="upload" className="p-4 rounded-xl bg-surface-container-low text-center">
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Drop PDF, DOCX or scanned deed</p>
                </TabsContent>
                <TabsContent value="paste" className="p-4 rounded-xl bg-surface-container-low text-center">
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Paste contract raw clauses directly</p>
                </TabsContent>
              </Tabs>

              {/* Progress Ring with Slider Controller */}
              <div className="flex items-center gap-6 p-4 bg-surface-container-low rounded-xl">
                <ProgressRing progress={ringProgress} size={64} strokeWidth={5} />
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                    <span>Interactive SVG Progress Ring</span>
                    <span className="font-bold text-primary">{ringProgress}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={ringProgress}
                    onChange={(e) => setRingProgress(Number(e.target.value))}
                    className="w-full accent-secondary cursor-pointer"
                  />
                </div>
              </div>

              {/* Chips & Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <Chip active>Active Chip (8)</Chip>
                <Chip>House Rent (4)</Chip>
                <Chip variant="primary">PDF</Chip>
                <Chip variant="secondary">DOCX</Chip>
                <Chip variant="error">High Risk</Chip>
                <Badge variant="success">Standard</Badge>
                <Badge variant="warning">Needs Changes</Badge>
                <Badge variant="error">Unlawful</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Verdict Badges & Circular Risk Gauge */}
        <section className="flex flex-col gap-4">
          <h2 className="font-headline-md text-headline-md text-primary font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">speed</span>
            5. Risk Gauge &amp; 4 Verdict State Badges
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm items-center">
            <div className="lg:col-span-5 flex items-center gap-6 p-6 rounded-2xl bg-primary text-on-primary">
              <RiskGauge score={62} verdict="NEEDS_CHANGES" theme="dark" />
              <div className="flex flex-col gap-1.5">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed-dim">
                  Statutory Health
                </span>
                <VerdictBadge verdict="NEEDS_CHANGES" size="lg" animatePulse />
                <p className="font-body-sm text-body-sm text-white/80 mt-1">
                  Evaluated under Contract Act 1872 &amp; Rent Control Act 1991.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-3">
              <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">
                The Four Required Verdict Presets (Design Spec)
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-surface-container-low rounded-xl flex flex-col gap-2 items-center text-center">
                  <VerdictBadge verdict="LOOKS_FINE" size="md" />
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Score 90-100</span>
                </div>
                <div className="p-3 bg-surface-container-low rounded-xl flex flex-col gap-2 items-center text-center">
                  <VerdictBadge verdict="NEEDS_CHANGES" size="md" />
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Score 50-89</span>
                </div>
                <div className="p-3 bg-surface-container-low rounded-xl flex flex-col gap-2 items-center text-center">
                  <VerdictBadge verdict="HIGH_RISK" size="md" />
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Score 0-49</span>
                </div>
                <div className="p-3 bg-surface-container-low rounded-xl flex flex-col gap-2 items-center text-center">
                  <VerdictBadge verdict="CONSULT_LAWYER" size="md" />
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Complex/Disputed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. StepBar Navigation */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-md text-headline-md text-primary font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">linear_scale</span>
              6. Wizard StepBar (All New Review Pages)
            </h2>
            <div className="flex items-center gap-1 bg-surface-container p-1 rounded-lg">
              <button
                type="button"
                onClick={() => setActiveStep(1)}
                className={`px-2.5 py-1 rounded text-label-sm font-label-sm ${activeStep === 1 ? 'bg-primary text-on-primary font-bold' : 'text-on-surface-variant'}`}
              >
                Step 1
              </button>
              <button
                type="button"
                onClick={() => setActiveStep(2)}
                className={`px-2.5 py-1 rounded text-label-sm font-label-sm ${activeStep === 2 ? 'bg-primary text-on-primary font-bold' : 'text-on-surface-variant'}`}
              >
                Step 2
              </button>
              <button
                type="button"
                onClick={() => setActiveStep(3)}
                className={`px-2.5 py-1 rounded text-label-sm font-label-sm ${activeStep === 3 ? 'bg-primary text-on-primary font-bold' : 'text-on-surface-variant'}`}
              >
                Step 3
              </button>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
            <StepBar currentStep={activeStep} />
          </div>
        </section>

        {/* 7. Flag Cards & Law Reference Drawer */}
        <section className="flex flex-col gap-4">
          <h2 className="font-headline-md text-headline-md text-primary font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">flag</span>
            7. Flag Cards (Red, Green, Amber) with Copy Morph &amp; Law Drawer
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Clause Heatmap Mini Rail */}
            <div className="lg:col-span-1 hidden lg:flex flex-col items-center">
              <span className="font-label-sm text-label-sm text-outline mb-2">Rail</span>
              <ClauseHeatmapRail
                clauses={GULSHAN_RENT_REVIEW_DEFAULT.clauses}
                activeClauseId={activeClauseId}
                onSelectClause={setActiveClauseId}
              />
            </div>

            {/* Findings List */}
            <div className="lg:col-span-11 flex flex-col gap-4">
              {GULSHAN_RENT_REVIEW_DEFAULT.flags.slice(0, 3).map((flag) => (
                <FlagCard
                  key={flag.id}
                  flag={flag}
                  onOpenLaw={openLaw}
                  isHighlighted={activeClauseId === flag.clauseId}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 8. Disclaimers, Empty State & Error State */}
        <section className="flex flex-col gap-4">
          <h2 className="font-headline-md text-headline-md text-primary font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">warning_amber</span>
            8. Disclaimer Strip, Empty State &amp; Error State
          </h2>
          <div className="flex flex-col gap-4">
            <DisclaimerStrip variant="compact" />
            <DisclaimerStrip variant="banner" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <EmptyState
                icon="history_edu"
                title="No Legal Agreements Found"
                description="No documents match your active search filters. Upload a tenancy deed to start diagnostic AI analysis."
                primaryActionLabel="Review My Agreement"
                primaryActionHref="/review/new/upload"
                secondaryActionLabel="Clear Active Filters"
                onSecondaryAction={() => alert('Filter reset triggered')}
              />

              <div className="flex flex-col gap-4">
                <ErrorState
                  title="Upload Failed: File Exceeds Limit"
                  message="The submitted contract file exceeds the 25 MB document processing limit. Allowed formats: PDF, DOCX, JPG, PNG up to 25 MB."
                  onRetry={() => alert('Retry upload triggered')}
                />

                <div className="p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/30 flex flex-col gap-3">
                  <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">Skeleton Shimmer State</span>
                  <div className="flex items-center gap-3">
                    <Skeleton className="w-12 h-12 rounded-xl" />
                    <div className="flex-1 flex flex-col gap-2">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-3 w-1/2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statutory Law Reference Drawer Slide-In */}
        <LawDrawer
          isOpen={isDrawerOpen}
          law={activeLaw}
          onClose={() => setIsDrawerOpen(false)}
        />
      </div>
    </TooltipProvider>
  );
}
