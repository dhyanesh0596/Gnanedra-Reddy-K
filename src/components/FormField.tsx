import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'
import type { FieldError } from 'react-hook-form'
import { cn } from '@/lib/cn'

type BaseProps = { label: string; error?: FieldError; helperText?: string; className?: string }

function Label({ label, error, helperText }: Pick<BaseProps, 'label' | 'error' | 'helperText'>) {
  return (
    <div className="mb-2 flex items-end justify-between gap-3">
      <label className="text-sm font-semibold text-text">{label}</label>
      {helperText ? <span className="text-xs text-text-muted">{helperText}</span> : null}
      {error ? <span className="text-xs text-red-600">{error.message}</span> : null}
    </div>
  )
}

export function TextField({ label, error, helperText, className, ...props }: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  return <div><Label label={label} error={error} helperText={helperText} /><input className={cn('w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-text shadow-sm outline-none transition placeholder:text-text-muted/60 focus:border-accent', error && 'border-red-400', className)} {...props} /></div>
}

export function SelectField({ label, error, helperText, className, children, ...props }: BaseProps & SelectHTMLAttributes<HTMLSelectElement>) {
  return <div><Label label={label} error={error} helperText={helperText} /><select className={cn('w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-text shadow-sm outline-none transition focus:border-accent', error && 'border-red-400', className)} {...props}>{children}</select></div>
}

export function TextAreaField({ label, error, helperText, className, ...props }: BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <div><Label label={label} error={error} helperText={helperText} /><textarea className={cn('min-h-40 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-text shadow-sm outline-none transition placeholder:text-text-muted/60 focus:border-accent', error && 'border-red-400', className)} {...props} /></div>
}

export function CheckboxField({ label, error, className, ...props }: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  return <label className={cn('flex items-start gap-3 text-sm leading-6 text-text-muted', className)}><input type="checkbox" className="mt-1 size-4 rounded border-line text-accent focus:ring-accent" {...props} /><span>{label}</span>{error ? <span className="ml-auto text-xs text-red-600">{error.message}</span> : null}</label>
}