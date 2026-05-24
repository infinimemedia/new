import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 shrink-0 cursor-pointer select-none',
    'font-bold uppercase tracking-[0.15em] text-xs',
    'transition-colors duration-200',
    'disabled:opacity-50 disabled:pointer-events-none',
  ].join(' '),
  {
    variants: {
      variant: {
        gold:    'bg-[#C4A35A] text-[#070707] hover:bg-[#D4B56A]',
        outline: 'border border-[#1C1C1C] text-[#F4F4F5] hover:border-[#C4A35A] hover:text-[#C4A35A]',
        ghost:   'text-[#C4A35A] hover:text-[#D4B56A]',
        white:   'bg-[#F4F4F5] text-[#070707] hover:bg-white',
        dark:    'bg-[#0C0C0C] border border-[#1C1C1C] text-[#F4F4F5] hover:border-[#C4A35A]',
      },
      size: {
        sm:   'px-4 py-2 text-[0.65rem]',
        md:   'px-6 py-3',
        lg:   'px-8 py-4',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: { variant: 'gold', size: 'md' },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
