import { ReactNode } from 'react';
import { VisionXNav, VisionXFooter } from '@/visionx/components';
import { VISIONX_CONFIG } from '@/visionx/config/visionx.config';

export const metadata = {
  title: VISIONX_CONFIG.META.title,
  description: VISIONX_CONFIG.META.description,
  keywords: VISIONX_CONFIG.META.keywords,
};

export default function VisionXLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <VisionXNav />
      <main className="flex-1">
        {children}
      </main>
      <VisionXFooter />
    </div>
  );
}
