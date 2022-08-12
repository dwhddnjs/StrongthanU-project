import React, { FC } from 'react';
import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';

const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderLogo />
      <HeaderNav />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  margin-bottom: 50px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
