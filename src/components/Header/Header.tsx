import React from 'react';
import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  border: 1px solid;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
