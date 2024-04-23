// PenIcon.jsx
import React from 'react';

const PenIcon = ({ onClick, style, ...rest }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ ...style, cursor: 'pointer' }}
      {...rest}>
      <path
        d="M12 20.5L18.5 16.5L12 12.5L5.5 16.5L12 20.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PenIcon;
