import React from 'react';

/** 
 * Uygulama-7: Reusable Input Component 
 * Supporting labels, errors, and variants with Tailwind CSS v4.
 */

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  id: string;
}

export default function Input({ 
  label, 
  error, 
  helpText, 
  id, 
  className = '', 
  ...props 
}: InputProps) {
  
  return (
    <div className="space-y-1.5 w-full">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1"
        >
          {label}
        </label>
      )}
      
      <input
        id={id}
        className={` 
          w-full px-4 py-3 rounded-xl border transition-all duration-200 outline-none
          text-gray-900 bg-white dark:text-gray-100 dark:bg-gray-800
          ${error 
            ? 'border-red-500 focus:ring-2 focus:ring-red-500/20 dark:border-red-600' 
            : 'border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 dark:focus:ring-secondary/20'
          }
          ${props.disabled 
            ? 'bg-gray-100 cursor-not-allowed opacity-60 dark:bg-gray-900' 
            : 'hover:border-primary/50 dark:hover:border-secondary/50'
          }
          ${className}
        `.trim()}
        aria-describedby={
          error ? `${id}-error` : helpText ? `${id}-help` : undefined
        }
        {...props}
      />
      
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs font-medium text-red-600 dark:text-red-400 ml-1">
          {error}
        </p>
      )}
      
      {helpText && !error && (
        <p id={`${id}-help`} className="text-xs text-gray-500 dark:text-gray-400 ml-1">
          {helpText}
        </p>
      )}
    </div>
  );
}
