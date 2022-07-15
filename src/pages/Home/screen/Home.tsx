import React, { useState } from 'react';
import { Header } from '../../../components/Header';
import styled from 'styled-components';

import { HomeCarousel, HomeInfo, HomeModal } from '../components';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  return (
    <HomeLayout>
      <Header />
      <CarouselInfoWrapper>
        <HomeInfo onOpenForm={handleOpenForm} />
        <HomeCarousel />
      </CarouselInfoWrapper>
      {isOpen && <HomeModal />}
    </HomeLayout>
  );
};

export default Home;

const HomeLayout = styled.div`
  width: 100vw;
  background-color: #ffffff;
  border: 1px solid;
  position: relative;
`;

const CarouselInfoWrapper = styled.div`
  display: flex;
  padding: 80px;
  justify-content: space-between;
`;
