import React from 'react';
import { Header } from '../../../components/Header';
import styled from 'styled-components';

const HomeLayout = styled.div`
  width: 100vw;
  background-color: #eaeaea;
`;

const Home = () => {
  return (
    <HomeLayout>
      <Header />
    </HomeLayout>
  );
};

export default Home;
