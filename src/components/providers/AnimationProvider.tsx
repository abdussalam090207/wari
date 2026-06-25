'use client';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function AnimationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={true}>
      <div key={pathname} className="h-full w-full">
        {children}
      </div>
    </AnimatePresence>
  );
}
