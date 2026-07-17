import React, { useState, useLayoutEffect } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  loading?: boolean;
  icon?: React.ReactNode;
}

export const Button = ({
  children,
  variant = 'primary',
  loading,
  icon,
  className = '',
  onClick,
  ...props
}: ButtonProps) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useLayoutEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      const timeout = setTimeout(() => setIsRippling(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [coords]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    if (onClick) onClick(e);
  };

  return (
    <button
      className={`relative overflow-hidden cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 rounded-xl
        ${variant === 'primary' ? 'btn-primary' : 'btn-outline'} ${className}`}
      onClick={handleClick}
      disabled={loading || props.disabled}
      {...props}
    >
      {isRippling && (
        <span
          className="absolute bg-white/35 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 animate-ripple"
          style={{
            left: coords.x,
            top: coords.y,
            width: '120px',
            height: '120px',
          }}
        />
      )}
      <span className="flex items-center justify-center gap-2 relative z-10">
        {loading ? (
          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          icon
        )}
        {children}
      </span>
    </button>
  );
};

export default Button;
