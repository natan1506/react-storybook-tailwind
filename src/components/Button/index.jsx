import React from 'react';

export const Button = ({ primary, backgroundColor, sizeText, label, ...props }) => {
  const mode = primary ? 'text-gray-100 bg-purple-800 hover:bg-purple-900 ' : 'text-white bg-gray-400 hover:bg-gray-700';

  const text = `text-${sizeText}`

  return (
    <button
      type="button"
      className={["py-2 px-3 my-2 text-sm font-medium transition-colors duration-200 transform rounded-lg", text, mode].join(' ')}
    >
      {label}
    </button>
  );
};

// border border-purple-300