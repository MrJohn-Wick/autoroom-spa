// import React, { useState, useEffect } from 'react';

import { SpinnerStyled } from './styled';

const Spinner = () => {
  return (
    <SpinnerStyled>
      <div className="loader" />
    </SpinnerStyled>
  );
};

export { Spinner };
