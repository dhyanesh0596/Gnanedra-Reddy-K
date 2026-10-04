import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Common = { variant?: Variant; className?: string; children: ReactNode }

type LinkProps = Common & { to: string; target?: string; rel?: string }
type AnchorProps = Common & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type NativeProps = Common & ButtonHTMLAttributes<HTMLButtonElement> & { to?: never; href?: never }

function variantClasses(variant: Variant): string {
  switch (variant) {
    case 'secondary':
      return 'border border-line bg-white text-text hover:border-accent hover:text-accent-strong'
    case 'ghost':
      return 'bg-transparent text-text hover:bg-surface-muted'
    default:
      return 'bg-accent text-white shadow-soft hover:bg-accent-strong'
  }
}

export function Button(props: LinkProps | AnchorProps | NativeProps) {
  const { variant = 'primary', className, children } = props
  const classes = cn('inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ease-out hover:-translate-y-0.5 focus-visible:ring-0', variantClasses(variant), className)

  if ('to' in props) {
    const linkProps = props as LinkProps
    return (
      <Link className={classes} to={linkProps.to} target={linkProps.target} rel={linkProps.rel}>
        {children}
      </Link>
    )
  }

  if ('href' in props) {
    const anchorProps = props as AnchorProps
    return (
      <a className={classes} href={anchorProps.href} target={anchorProps.target} rel={anchorProps.rel}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={props.type ?? 'button'} onClick={props.onClick} disabled={props.disabled}>
      {children}
    </button>
  )
}