import React from 'react';
import styled from 'styled-components';

const HeaderNav = () => {
  return (
    <NavContainer>
      <NavItems>Tier</NavItems>
      <NavItems>Rank</NavItems>
      <NavItems>Program</NavItems>
      <NavItems>Reference</NavItems>
    </NavContainer>
  );
};

export default HeaderNav;

const NavContainer = styled.div`
  /* border: 1px solid; */
  margin-right: 170px;
`;

const NavItems = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  margin-right: 50px;
  &:last-child {
    margin-right: 0;
  }
`;
