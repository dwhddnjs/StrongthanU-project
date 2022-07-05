import React from 'react';
import styled from 'styled-components';

const HeaderLogo = () => {
  return <Logo>StrongThenU</Logo>;
};

export default HeaderLogo;

const Logo = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
  font-family: 'Luckiest Guy';
  font-size: 28px;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 0px -1.5px 0 #212121, 0px -1.5px 0 #212121, 0px 1.5px 0 #212121, 0px 1.5px 0 #212121,
    -1.5px 0px 0 #212121, 1.5px 0px 0 #212121, -1.5px 0px 0 #212121, 1.5px 0px 0 #212121, -1.5px -1.5px 0 #212121,
    1.5px -1.5px 0 #212121, -1.5px 1.5px 0 #212121, 1.5px 1.5px 0 #212121, -1.5px 4.5px 0 #212121, 0px 4.5px 0 #212121,
    1.5px 4.5px 0 #212121, 0 4.5px 0.25px rgba(0, 0, 0, 0.1), 0 0 1.5px rgba(0, 0, 0, 0.1),
    0 1.5px 0.75px rgba(0, 0, 0, 0.3), 0 3px 1.5px rgba(0, 0, 0, 0.2), 0 4.5px 4.5px rgba(0, 0, 0, 0.25),
    0 6px 6px rgba(0, 0, 0, 0.2), 0 9px 9px rgba(0, 0, 0, 0.15);
  margin-left: 20px;
`;
