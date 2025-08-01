// components/ui/badge.tsx
// Fallback Badge компонент на случай, если не установлен в UI библиотеке

/*import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground border-border',
        success: 'border-transparent bg-green-100 text-green-800 hover:bg-green-200',
        warning: 'border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
        info: 'border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={`${badgeVariants({ variant })} ${className || ''}`} {...props} />;
}

export { Badge, badgeVariants };

// Простая альтернатива без зависимостей
export const SimpleBadge = ({
  children,
  variant = 'default',
  className = '',
}: {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'success' | 'warning' | 'info';
  className?: string;
}) => {
  const baseClasses = 'inline-flex items-center px-2 py-1 rounded-md text-xs font-medium';

  const variantClasses = {
    default: 'bg-gray-100 text-gray-800 border border-gray-200',
    outline: 'bg-white text-gray-600 border border-gray-300',
    success: 'bg-green-100 text-green-800 border border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    info: 'bg-blue-100 text-blue-800 border border-blue-200',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>{children}</span>
  );
};
*/
