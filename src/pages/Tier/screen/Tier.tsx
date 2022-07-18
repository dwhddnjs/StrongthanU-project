import React from 'react';
import { Header } from '../../../components/Header';
import styled from 'styled-components';
import b from '../../../images/b.png';

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
        </TitleDescWrapper>
        <TierImg>
          <img src={b} alt="" width={500} />
        </TierImg>
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
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 10px;
`;

const TitleDescWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 150px;
  padding: 20px;
`;

const ImgDescWrapper = styled.div`
  margin-top: 30px;
  padding: 0px 80px 0 80px;
  display: flex;
  justify-content: center;
`;
const TierImg = styled.div``;
const TierDesc = styled.p`
  width: 600px;
  /* border: 1px solid; */
`;
