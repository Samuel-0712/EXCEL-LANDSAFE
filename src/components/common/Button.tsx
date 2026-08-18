import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon = true,
  loading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = "group relative inline-flex items-center justify-center font-body font-semibold tracking-wide transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none";

  const sizeClasses = {
    sm: "text-xs px-4 py-2 rounded-full gap-1.5",
    md: "text-sm px-6 py-3 rounded-full gap-2",
    lg: "text-base px-8 py-4 rounded-full gap-2.5 shadow-brand"
  }[size];

  const variantClasses = {
    primary: "bg-brand-green text-white hover:bg-brand-green-hover shadow-lg hover:shadow-brand hover:-translate-y-0.5 active:translate-y-0",
    secondary: "border-2 border-brand-green text-brand-green bg-transparent hover:bg-brand-green hover:text-white hover:-translate-y-0.5 active:translate-y-0",
    text: "text-brand-green hover:text-brand-green-hover px-0 py-1 rounded-none shadow-none focus:ring-0 group"
  }[variant];

  return (
    <button
      className={`${baseClasses} ${variant === 'text' ? '' : sizeClasses} ${variantClasses} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : null}

      <span>{children}</span>

      {icon && !loading && (
        <ArrowRight 
          className={`w-4 h-4 transition-transform duration-200 ease-out ${
            variant === 'text' 
              ? 'group-hover:translate-x-1' 
              : 'group-hover:translate-x-0.5'
          }`} 
        />
      )}

      {variant === 'text' && (
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-green transition-all duration-200 group-hover:w-full" />
      )}
    </button>
  );
};
