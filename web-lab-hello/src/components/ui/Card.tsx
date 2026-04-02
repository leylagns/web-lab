import React from 'react';

/** 
 * Uygulama-8: Reusable Card Component 
 * Supporting 3 variants and flexible layouts with Tailwind CSS v4.
 */

interface CardProps {
  title?: string;
  children: React.ReactNode;
  image?: string;
  imageAlt?: string;
  footer?: React.ReactNode;
  variant?: 'elevated' | 'outlined' | 'filled';
  className?: string;
}

export default function Card({
  title,
  children,
  image,
  imageAlt = '',
  footer,
  variant = 'elevated',
  className = '',
}: CardProps) {
  
  // Card Variants
  const variants = {
    elevated: 'bg-white dark:bg-gray-800 shadow-md hover:shadow-xl dark:shadow-black/20',
    outlined: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    filled: 'bg-gray-50 dark:bg-gray-800/50 border border-transparent',
  };

  return (
    <div
      className={`
        rounded-3xl overflow-hidden transition-all duration-300 flex flex-col h-full
        ${variants[variant]}
        ${className}
      `.trim()}
    >
      {/* Image Section */}
      {image && (
        <div className="relative overflow-hidden aspect-video">
          <img 
            src={image} 
            alt={imageAlt} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
      )}
      
      {/* Content Section */}
      <div className="p-6 flex-grow space-y-3">
        {title && (
          <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
            {title}
          </h3>
        )}
        <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {children}
        </div>
      </div>
      
      {/* Footer Section */}
      {footer && (
        <div className="px-6 py-4 bg-gray-50/50 dark:bg-gray-900/20 border-t border-gray-100 dark:border-gray-700/50">
          {footer}
        </div>
      )}
    </div>
  );
}
