import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'text-gray-100 bg-purple-800 hover:bg-purple-900 ' : 'text-white bg-gray-400 hover:bg-gray-700';

  const text = size === 'small' ? `text-${size} py-1 px-2` : `text-${size} py-2 px-3`

  return (
    <button
      type="button"
      className={["my-2 font-medium transition-colors duration-200 transform rounded-lg", text, mode].join(' ')}
    >
      {label}
    </button>
  );
};


Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: true,
  size: 'large',
};

// border border-purple-300