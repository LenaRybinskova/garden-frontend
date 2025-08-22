'use client';

import * as React from 'react';
import { JSX } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { cn } from '@/common/utils/cn-util';

type CheckboxProps = Omit<
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
  'title'
> & {
  title?: JSX.Element | string | React.ReactNode;
  className?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  error?: string;
};

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, title, checked, onChange, error, ...props }, ref) => (
    <div className="flex items-center gap-2">
      <CheckboxPrimitive.Root
        ref={ref}
        checked={checked}
        onCheckedChange={onChange}
        className={cn(
          'peer border-primary ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground h-4 w-4 shrink-0 rounded-sm border focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          error && 'border-destructive border-2',
          className,
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn('flex items-center justify-center text-current')}
        >
          {' '}
          {/*квадрат*/}
          <Check className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {title && (
        <label
          htmlFor={props.id}
          className="text-nature-earth text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {title}
        </label>
      )}
    </div>
  ),
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
