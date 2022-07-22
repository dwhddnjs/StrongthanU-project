import React from 'react';
import { Header } from '../../../components/Header';
import styled from 'styled-components';
import { TierTable, TierImg } from '../components';

const Tier = () => {
  return (
    <TierContainer>
      <Header />
      <ImgDescWrapper>
        <TitleDescWrapper>
          <TierTitle>당신의 티어는 브론즈 입니다.</TierTitle>
          <TierDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem id repellat hic aliquam asperiores,
            voluptate nisi est saepe autem impedit, rem ipsa! Delectus excepturi architecto nemo hic minus sit
            exercitationem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem id repellat hic aliquam
            asperiores, voluptate nisi est saepe autem impedit, rem ipsa! Delectus excepturi architecto nemo hic minus
            sit exercitationem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem id repellat hic aliquam
            asperiores, voluptate nisi est saepe autem impedit, rem ipsa! Delectus excepturi architecto nemo hic minus
            sit exercitationem.
          </TierDesc>
          <TierTable />
        </TitleDescWrapper>
        <TierImg />
      </ImgDescWrapper>
    </TierContainer>
  );
};

export default Tier;

const TierContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TierTitle = styled.span`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 20px;
  padding: 3px 5px 3px 5px;
`;

const TitleDescWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 150px;
  padding: 20px;
  margin-top: 10px;
`;

const ImgDescWrapper = styled.div`
  margin-top: 30px;
  padding: 0px 80px 0 80px;
  display: flex;
  justify-content: center;
`;

const TierDesc = styled.p`
  width: 460px;
  /* border: 1px solid; */
`;
