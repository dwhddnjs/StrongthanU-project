import React, { FC } from 'react';
import styled from 'styled-components';

interface RankTabTypes {
  onGenderTab: (data: string) => void;
}

const RankTab: FC<RankTabTypes> = ({ onGenderTab }) => {
  const handleGenderTab = (data: string) => {
    onGenderTab(data);
  };

  return (
    <RankTabContainer>
      <RankBtnWrapper>
        <RankTabBtn onClick={() => handleGenderTab('man')}>Man</RankTabBtn>
        <RankTabBtn onClick={() => handleGenderTab('woman')}>Woman</RankTabBtn>
      </RankBtnWrapper>
    </RankTabContainer>
  );
};

export default RankTab;

const RankTabContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const RankTabBtn = styled.span`
  cursor: pointer;
  margin: 10px;
  padding: 5px 10px 5px 10px;
  background-color: #3eb489;
  color: #ffffff;
  font-weight: 600;
  border-radius: 10px;
  font-size: 14px;
  &:last-child {
    background-color: #ff6347;
  }
`;

const RankBtnWrapper = styled.div`
  width: fit-content;
  margin-right: 100px;
`;
