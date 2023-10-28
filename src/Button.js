'use client';

import React from 'react';

const Button = ({ children, censoredStyles }) => {
  const [isCensored, setIsCensored] = React.useState(false);

  function handleClick() {
    setIsCensored(!isCensored);
  }

  const currentStyles = isCensored ? censoredStyles : undefined;

  return (
    <button style={currentStyles} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
