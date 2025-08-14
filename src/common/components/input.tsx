'use client';

import * as React from 'react';
import { cn } from '@/common/utils/cn-util';

type InputType = {
  title?: string;
  error?: string;
  onArrowUp?: () => void;
  onArrowDown?: () => void;
} & React.ComponentProps<'input'>;

const Input = React.forwardRef<HTMLInputElement, InputType>(
  ({ className, type, title, error, onArrowUp, onArrowDown, ...props }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'ArrowUp' && onArrowUp) {
        e.preventDefault();
        onArrowUp();
      } else if (e.key === 'ArrowDown' && onArrowDown) {
        e.preventDefault();
        onArrowDown();
      }
      props.onKeyDown?.(e);
    };

    return (
      <div className={'flex w-full flex-col justify-center gap-0.5 align-middle'}>
        {title && <p className={'text-nature-earth text-xs'}>{title}</p>}
        <input
          type={type}
          className={cn(
            'bg-background file:text-foreground placeholder:text-muted-foreground [&::placeholder]:text-input text-accent-foreground border-nature-earth focus:border-foreground box-border flex h-10 w-full rounded-md border px-3 py-2 font-medium focus:border-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className,
          )}
          ref={ref}
          onKeyDown={handleKeyDown}
          {...props}
        />
        {error && <p className={'text-destructive text-xs'}>{error}</p>}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
