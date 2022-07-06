import React from 'react';
import { Header } from '../../../components/Header';
import styled from 'styled-components';
import { HomeCarousel } from '../components';

const HomeLayout = styled.div`
  width: 100vw;
  background-color: #eaeaea;
`;

const Home = () => {
  return (
    <HomeLayout>
      <Header />
      <HomeCarousel />
    </HomeLayout>
  );
};

export default Home;
