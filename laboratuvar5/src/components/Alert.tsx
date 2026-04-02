import React from 'react';

/** 
 * Uygulama-9: Reusable Alert Component 
 * Supporting 4 status variants and dismissible functionality with Tailwind CSS v4.
 */

interface AlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export default function Alert({
  children,
  variant = 'info',
  title,
  dismissible = false,
  onDismiss,
}: AlertProps) {
  
  // Color Variants
  const variants = {
    info: 'bg-blue-50 border-blue-500 text-blue-800 dark:bg-blue-950 dark:text-blue-200',
    success: 'bg-green-50 border-green-500 text-green-800 dark:bg-green-950 dark:text-green-200',
    warning: 'bg-amber-50 border-amber-500 text-amber-800 dark:bg-amber-950 dark:text-amber-200',
    error: 'bg-red-50 border-red-500 text-red-800 dark:bg-red-950 dark:text-red-200',
  };

  return (
    <div 
      role="alert" 
      className={`
        border-l-4 rounded-r-xl p-4 transition-all duration-300
        ${variants[variant]}
      `.trim()}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          {title && (
            <p className="font-bold mb-1 text-sm lg:text-base tracking-tight">
              {title}
            </p>
          )}
          <div className="text-sm opacity-90 leading-relaxed">
            {children}
          </div>
        </div>
        
        {dismissible && (
          <button 
            onClick={onDismiss}
            className="ml-4 p-1 rounded-lg opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer"
            aria-label="Kapat"
          >
            <span className="text-xl leading-none">&times;</span>
          </button>
        )}
      </div>
    </div>
  );
}
