import React from 'react';
import styled from 'styled-components';

const RankHeader = () => {
  return (
    <RankHeaderContainer>
      <RankList>
        <RankListItem>Rank</RankListItem>
        <RankListItem>Tier</RankListItem>
        <RankListItem>Squat</RankListItem>
        <RankListItem>BenchPress</RankListItem>
        <RankListItem>DeadLift</RankListItem>
        <RankListItem>Total</RankListItem>
      </RankList>
    </RankHeaderContainer>
  );
};

export default RankHeader;

const RankHeaderContainer = styled.div`
  width: 100%;
`;

const RankList = styled.div`
  display: flex;
  border: 1px solid;
  justify-content: space-between;
  margin: 0 100px 0 100px;
  padding: 8px 90px 8px 90px;
  background-color: #009dd8;
  color: #ffffff;
  font-weight: 700;
  border-radius: 10px;
`;
const RankListItem = styled.span``;
