import * as React from 'react';
import { Sidebar } from '@/components/shared/sidebar';
import { TopBar } from '@/components/shared/top-bar';
import { ToastContainer } from '@/components/ui/toast';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Sidebar />
      <TopBar isSidebarLayout={true} />
      <main className="pl-0 lg:pl-72 pt-20 min-h-screen flex flex-col flex-1">
        {children}
      </main>
      <ToastContainer />
    </div>
  );
}
