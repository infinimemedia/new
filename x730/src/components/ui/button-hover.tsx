'use client';

/**
 * ButtonHover — X730 animated circle-expansion button
 *
 * On hover, a gold circle sweeps out from the center, creating
 * a bold, kinetic CTA feel aligned with the X730 brand.
 *
 * Usage:
 *   <ButtonHover href="/contact" variant="gold">Book a Consultation</ButtonHover>
 *   <ButtonHover href="/services" variant="outline">Explore Services</ButtonHover>
 *   <ButtonHover type="submit" variant="gold">Send Message</ButtonHover>
 */

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

/* ─────────────────────────────────────────────────────────
   DESIGN TOKENS
───────────────────────────────────────────────────────── */

type Variant = 'gold' | 'outline' | 'dark' | 'ghost' | 'white';
type Size    = 'sm' | 'md' | 'lg';

/** Root element classes */
const base =
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden cursor-pointer ' +
  'font-bold uppercase tracking-[0.18em] transition-colors duration-300 select-none shrink-0 ' +
  'disabled:opacity-50 disabled:pointer-events-none';

const variantMap: Record<Variant, string> = {
  gold:
    'bg-[#C4A35A] text-[#070707] border border-[#C4A35A]',
  outline:
    'bg-transparent text-[#F4F4F5] border border-[#1C1C1C] ' +
    'hover:border-[#C4A35A] hover:text-[#070707]',
  dark:
    'bg-[#0C0C0C] text-[#F4F4F5] border border-[#1C1C1C] ' +
    'hover:border-[#C4A35A] hover:text-[#070707]',
  ghost:
    'bg-transparent text-[#C4A35A] hover:text-[#070707]',
  white:
    'bg-[#F4F4F5] text-[#070707] border border-[#F4F4F5] hover:text-[#070707]',
};

const sizeMap: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-[0.68rem]',
  md: 'px-8 py-3.5 text-[0.75rem]',
  lg: 'px-10 py-4 text-xs',
};

/** The circle that expands on hover */
const circleMap: Record<Variant, string> = {
  gold:    'bg-[#96731F]',   // darker gold for contrast on gold bg
  outline: 'bg-[#C4A35A]',
  dark:    'bg-[#C4A35A]',
  ghost:   'bg-[#C4A35A]',
  white:   'bg-[#C4A35A]',
};

/* ─────────────────────────────────────────────────────────
   INNER STRUCTURE (circle + label)
───────────────────────────────────────────────────────── */

function Inner({
  variant,
  children,
}: {
  variant: Variant;
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Gold circle — expands from center on hover */}
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute left-1/2 top-1/2',
          'h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full',
          'transition-all duration-500 ease-out',
          'group-hover:h-64 group-hover:w-64',
          circleMap[variant],
        )}
      />
      {/* Content stays above the circle */}
      <span className="relative z-10 inline-flex items-center gap-2 leading-none">
        {children}
      </span>
    </>
  );
}

/* ─────────────────────────────────────────────────────────
   PROP TYPES
───────────────────────────────────────────────────────── */

type SharedProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
};

/** When href is provided — renders as Next.js <Link> */
type LinkButtonProps = SharedProps &
  Omit<React.ComponentProps<typeof Link>, keyof SharedProps | 'href'> & {
    href: string;
  };

/** When href is absent — renders as <button> */
type NativeButtonProps = SharedProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & {
    href?: never;
  };

export type ButtonHoverProps = LinkButtonProps | NativeButtonProps;

/* ─────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────── */

export function ButtonHover({
  variant = 'gold',
  size = 'md',
  className,
  children,
  ...rest
}: ButtonHoverProps) {
  const cls = cn(base, variantMap[variant], sizeMap[size], className);

  /* Link */
  if ('href' in rest && rest.href) {
    const { href, ...linkRest } = rest as LinkButtonProps;
    return (
      <Link href={href} className={cls} {...linkRest}>
        <Inner variant={variant}>{children}</Inner>
      </Link>
    );
  }

  /* Button */
  const btnRest = rest as NativeButtonProps;
  return (
    <button className={cls} {...btnRest}>
      <Inner variant={variant}>{children}</Inner>
    </button>
  );
}
