'use client'

import Link from 'next/link'
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

interface ButtonAsButton extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  href?: never
}

interface ButtonAsLink extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
  href: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-terra-500 text-white hover:bg-terra-500/90 border-2 border-terra-500',
  secondary: 'bg-forest-900 text-white hover:bg-forest-700 border-2 border-forest-900',
  outline: 'border-2 border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-white bg-transparent',
  ghost: 'text-forest-900 hover:bg-forest-900/10 border-2 border-transparent',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-6 py-2.5 text-sm',
  md: 'px-8 py-3 text-base',
  lg: 'px-10 py-4 text-base',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-terra-500 focus:ring-offset-2'
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if ('href' in props && props.href) {
    const { href, ...linkProps } = props as ButtonAsLink
    return (
      <Link href={href} className={combinedStyles} {...linkProps}>
        {children}
      </Link>
    )
  }

  return (
    <button className={combinedStyles} {...(props as ButtonAsButton)}>
      {children}
    </button>
  )
}
