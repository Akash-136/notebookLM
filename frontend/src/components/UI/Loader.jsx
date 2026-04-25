import React from 'react';

const Loader = ({ className = '' }) => {
  return (
    <div className={`animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 ${className}`}></div>
  );
};

export default Loader;