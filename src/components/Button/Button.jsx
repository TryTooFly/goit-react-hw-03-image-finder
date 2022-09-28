import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
export const StyledButtonCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;
export const Button = ({ page }) => {
  return (
    <StyledButtonCont>
      <button type="button" className="Button" onClick={page}>
        load more
      </button>
    </StyledButtonCont>
  );
};
Button.propTypes = {
  onClick: PropTypes.number,
};
