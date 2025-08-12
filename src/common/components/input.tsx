'use client';

import * as React from 'react';
import { cn } from '@/common/utils/cn-util';

type InputType = {
  title?: string;
  error?: string;
} & React.ComponentProps<'input'>;

const Input = React.forwardRef<HTMLInputElement, InputType>(
  ({ className, type, title, error, ...props }, ref) => {
    return (
      <div className={'flex w-full flex-col justify-center gap-1.5 align-middle'}>
        {title && <p className={'text-nature-earth text-xs'}>{title}</p>}
        <input
          type={type}
          className={cn(
            'border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-base focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && <p className={'text-destructive text-xs'}>{error}</p>}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
