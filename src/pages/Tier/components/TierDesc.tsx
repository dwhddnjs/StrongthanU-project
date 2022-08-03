import React, { FC } from 'react';
import styled from 'styled-components';
import { TierTable } from '../components';

interface TierDescTypes {
  currentTierTitle: string;
  currentTierColor: string;
  currentTierDesc: string;
}

const TierDesc: FC<TierDescTypes> = ({ currentTierTitle, currentTierColor, currentTierDesc }) => {
  return (
    <TierDescContainer>
      <TierTitle>
        당신의 티어는 <span style={{ color: currentTierColor }}>{currentTierTitle}</span> 입니다.
      </TierTitle>
      <TierInfo>{currentTierDesc}</TierInfo>
      <TierTable />
    </TierDescContainer>
  );
};

export default TierDesc;

const TierTitle = styled.span`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 20px;
  padding: 3px 5px 3px 5px;
`;

const TierDescContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 150px;
  padding: 20px;
  margin-top: 40px;
`;

const TierInfo = styled.p`
  width: 460px;
`;
