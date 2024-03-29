import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <NavContainer>
      <NavItems>{localStorage.getItem('data') !== null ? <Link to="/tier">Tier</Link> : <span>Tier</span>}</NavItems>
      <NavItems>
        <Link to="/rank">Rank</Link>
      </NavItems>
      <NavItems onClick={() => alert('서비스 준비중입니다.')}>
        <Link to="">Program</Link>
      </NavItems>
      <NavItems>
        <Link to="/reference">Reference</Link>
      </NavItems>
    </NavContainer>
  );
};

export default HeaderNav;

const NavContainer = styled.div`
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
