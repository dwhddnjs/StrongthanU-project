import React from 'react';
import { Header } from '../../../components/Header';
import styled from 'styled-components';
import { TierDesc, TierImg } from '../components';
import { getTierInfo, getMultiple } from '../../../util';

const Tier = () => {
  const localData = JSON.parse(localStorage.getItem('data') as string);
  const multipleDead = getMultiple(localData.dead, localData.body);
  const currentTier = getTierInfo(multipleDead);

  return (
    <TierContainer>
      <Header />
      <ImgDescWrapper>
        <TierDesc
          currentTierTitle={currentTier.tier}
          currentTierColor={currentTier.color}
          currentTierDesc={currentTier.desc}
        />
        <TierImg currentTierImg={currentTier.img} />
      </ImgDescWrapper>
    </TierContainer>
  );
};

export default Tier;

const TierContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgDescWrapper = styled.div`
  margin-top: 30px;
  padding: 0px 80px 0 80px;
  display: flex;
  justify-content: center;
`;
