import React from 'react';
import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo />
      <HeaderNav />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  /* border: 1px solid; */
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
