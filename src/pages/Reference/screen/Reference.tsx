import React from 'react';
import styled from 'styled-components';
import { Header } from '../../../components/Header';
import { ReferenceImg } from '../components';
import man1rm from '../../../images/man1rm.jpeg';
import wo1rm from '../../../images/wo1rm.jpeg';

const Reference = () => {
  return (
    <ReferenceContainer>
      <Header />
      <ReferenceTitle>체중별 3대 중량</ReferenceTitle>
      <ImgWrapper>
        <ReferenceImg img={man1rm} />
        <ReferenceImg img={wo1rm} />
      </ImgWrapper>
    </ReferenceContainer>
  );
};

export default Reference;

const ReferenceContainer = styled.div``;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ReferenceTitle = styled.span`
  font-size: 28px;
  margin-left: 200px;
  margin-bottom: 5px;
  font-weight: 800;
  color: #3eb489;
`;
