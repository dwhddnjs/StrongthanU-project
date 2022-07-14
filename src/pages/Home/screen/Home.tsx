import React, { useState } from 'react';
import { Header } from '../../../components/Header';
import styled from 'styled-components';
import { HomeCarousel, HomeInfo } from '../components';

const Home = () => {
  return (
    <HomeLayout>
      <Header />
      <CarouselInfoWrapper>
        <HomeInfo />
        <HomeCarousel />
      </CarouselInfoWrapper>
    </HomeLayout>
  );
};

export default Home;

const HomeLayout = styled.div`
  width: 100vw;
  background-color: #ffffff;
`;

const CarouselInfoWrapper = styled.div`
  /* border: 1px solid; */
  display: flex;
  padding: 80px;
  justify-content: space-between;
`;
