import React, { FC } from 'react';
import styled from 'styled-components';
import b from '../../../images/b.png';

interface TierImgTypes {
  currentTierImg: string;
}

const TierImg: FC<TierImgTypes> = ({ currentTierImg }) => {
  return (
    <TierImgContainer>
      <img src={currentTierImg} alt="" width={500} />
    </TierImgContainer>
  );
};

export default TierImg;

const TierImgContainer = styled.div``;
