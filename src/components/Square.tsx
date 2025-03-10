import React from 'react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
  isWinningSquare: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isWinningSquare }) => {
  const baseClasses = "w-full h-20 text-4xl font-bold flex items-center justify-center rounded-md transition-all duration-200";
  
  // Apply different classes based on winning state
  const getSquareClasses = () => {
    if (isWinningSquare) {
      return `${baseClasses} bg-green-200 text-green-800 border-2 border-green-500`;
    }
    
    if (!value) {
      return `${baseClasses} bg-gray-100 hover:bg-gray-200 cursor-pointer`;
    }
    
    if (value === 'X') {
      return `${baseClasses} bg-indigo-100 text-indigo-600`;
    }
    
    return `${baseClasses} bg-purple-100 text-purple-600`;
  };

  return (
    <button 
      className={getSquareClasses()}
      onClick={onClick}
      aria-label={value ? `Square with ${value}` : "Empty square"}
    >
      {value}
    </button>
  );
};

export default Square;