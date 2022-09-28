import styled from 'styled-components';
import React from 'react';
import { Audio } from 'react-loader-spinner';

export const StyledLoader = styled.div`
  margin: 0 auto;
  height: 80px;
  width: 180px;
`;
export const Loader = () => {
  return (
    <StyledLoader>
      <Audio
        height="80"
        width="180"
        radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        wrapperStyle
      />
    </StyledLoader>
  );
};
