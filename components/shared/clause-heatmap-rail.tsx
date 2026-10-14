'use client';

import * as React from 'react';
import { Clause } from '@/types/clause';
import { cn } from '@/lib/utils';

export interface ClauseHeatmapRailProps {
  clauses: Clause[];
  activeClauseId?: string;
  onSelectClause: (clauseId: string) => void;
  className?: string;
}

export function ClauseHeatmapRail({
  clauses,
  activeClauseId,
  onSelectClause,
  className,
}: ClauseHeatmapRailProps) {
  const getSeverityColor = (severity: Clause['severity']) => {
    switch (severity) {
      case 'red':
        return 'bg-error hover:bg-error/90';
      case 'amber':
        return 'bg-[#F59E0B] hover:bg-[#D97706]';
      case 'green':
      default:
        return 'bg-[#10B981] hover:bg-[#059669]';
    }
  };

  return (
    <div
      aria-label="Clause Heatmap Navigator"
      className={cn(
        'w-3.5 shrink-0 flex flex-col gap-2 py-3 bg-surface-container-low rounded-full items-center shadow-inner border border-outline-variant/30 select-none',
        className
      )}
    >
      {clauses.map((clause) => {
        const isActive = activeClauseId === clause.id;
        const isRed = clause.severity === 'red';

        return (
          <button
            key={clause.id}
            type="button"
            onClick={() => onSelectClause(clause.id)}
            title={`${clause.titleEn} (${clause.severity})`}
            className={cn(
              'w-2 rounded-full transition-all duration-200 cursor-pointer',
              getSeverityColor(clause.severity),
              isActive ? 'scale-125 ring-2 ring-primary' : 'hover:scale-110',
              isRed ? 'h-10 animate-pulse' : 'h-7'
            )}
          />
        );
      })}
    </div>
  );
}
