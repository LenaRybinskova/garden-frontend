/*
'use client';

import { useRef, useState, PointerEventHandler, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BottomSheetProps {
  openRatio?: number;
  handleHeight?: number;
  className?: string;
  children: ReactNode;
}

export function BottomSheet({
  openRatio = 0.8,
  handleHeight = 24,
  className,
  children,
}: BottomSheetProps) {
  const startY = useRef<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const THRESHOLD = 50;

  const onPointerDown: PointerEventHandler = (e) => {
    startY.current = e.clientY;
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp, { once: true });
  };

  const onPointerMove = (e: PointerEvent) => {
    if (startY.current == null) return;
    const delta = e.clientY - startY.current;

    if (!isOpen && delta < -THRESHOLD) {
      setIsOpen(true);
      cleanup();
    }

    if (isOpen && delta > THRESHOLD) {
      setIsOpen(false);
      cleanup();
    }
  };

  const onPointerUp = () => cleanup();

  const cleanup = () => {
    startY.current = null;
    window.removeEventListener('pointermove', onPointerMove);
  };

  const sheetHeight = `${openRatio * 100}vh`;
  const closedBottom = `calc(-${openRatio * 100}vh + ${handleHeight}px)`;

  return (
    <div
      className={cn(
        'fixed right-0 left-0 z-50 flex flex-col rounded-t-2xl shadow-lg transition-[bottom] duration-300 ease-out',
        'bg-background dark:bg-background-dark',
        'border-4 border-gray-300 dark:border-gray-600',
        'transition-all duration-500 ease-in-out',
        className,
      )}
      style={{
        bottom: isOpen ? 0 : closedBottom,
        height: sheetHeight,
      }}
    >
      {/!* Ручка *!/}
      <div
        onPointerDown={onPointerDown}
        className="flex h-6 cursor-grab touch-none items-center justify-center"
      >
        <div className="h-1.5 w-12 rounded-full bg-gray-300" />
      </div>

      {/!* Контент *!/}
      <div className="flex flex-1 justify-center overflow-y-auto px-4">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
*/
