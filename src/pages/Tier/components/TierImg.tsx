import React from 'react';
import styled from 'styled-components';
import b from '../../../images/b.png';

const TierImg = () => {
  return (
    <TierImgContainer>
      <img src={b} alt="" width={500} />
    </TierImgContainer>
  );
};

export default TierImg;

const TierImgContainer = styled.div``;
