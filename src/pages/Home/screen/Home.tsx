import React, { useState } from 'react';
import { Header } from '../../../components/Header';
import styled from 'styled-components';

import { HomeCarousel, HomeInfo, HomeModal } from '../components';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
  };

  return (
    <HomeLayout>
      <Header />
      <CarouselInfoWrapper>
        <HomeInfo onOpenForm={handleOpenForm} />
        <HomeCarousel />
      </CarouselInfoWrapper>
      {isOpen && <HomeModal onCloseForm={handleCloseForm} />}
    </HomeLayout>
  );
};

export default Home;

const HomeLayout = styled.div`
  width: 100vw;
  background-color: #ffffff;
  position: relative;
`;

const CarouselInfoWrapper = styled.div`
  display: flex;
  padding: 80px;
  justify-content: space-between;
`;
