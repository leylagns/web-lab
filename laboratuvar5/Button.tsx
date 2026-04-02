import React from 'react';

/** 
 * Uygulama-6: Reusable Button Component 
 * Supporting 4 colors and 3 sizes with Tailwind CSS v4.
 */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  
  // Color Variants
  const variants = {
    primary: 'bg-primary text-white hover:bg-secondary shadow-md active:scale-95',
    secondary: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:scale-95',
    ghost: 'bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800',
  };

  // Size Variants
  const sizes = {
    sm: 'px-3 py-1.5 text-xs font-medium',
    md: 'px-6 py-2.5 text-sm font-semibold',
    lg: 'px-8 py-3.5 text-lg font-bold',
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-xl transition-all duration-200 
        disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
