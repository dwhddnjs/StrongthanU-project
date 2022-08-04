import React, { FC } from 'react';
import styled from 'styled-components';
import { getMultiple, getTierInfo } from '../../../util';

interface RankListTypes {
  order: number;
  ranker: {
    nickname: string;
    body: number;
    squat: number;
    bench: number;
    dead: number;
  };
}

const RankList: FC<RankListTypes> = ({ ranker, order }) => {
  const totalWeight = ranker.squat + ranker.bench + ranker.dead;
  const deadMultiple = getMultiple(ranker.dead, ranker.body);
  const tierData = getTierInfo(deadMultiple);
  return (
    <RankItemContainer>
      <RankListItem>{order + 1}</RankListItem>
      <RankListItem>{ranker.nickname}</RankListItem>
      <RankListItem>
        <img src={tierData.img} alt="" width={40} />
      </RankListItem>
      <RankListItem>{ranker.squat}</RankListItem>
      <RankListItem>{ranker.bench}</RankListItem>
      <RankListItem>{ranker.dead}</RankListItem>
      <RankListItem>
        {totalWeight} / {Math.floor(getMultiple(totalWeight, ranker.body))}배
      </RankListItem>
    </RankItemContainer>
  );
};

export default RankList;

const RankItemContainer = styled.div`
  display: flex;
  border: 1px solid #c4c4c4;
  margin: 10px 100px 10px 100px;
  border-radius: 10px;
  padding: 0 60px 0 60px;
  height: 80px;
  justify-content: space-between;
`;

const RankListItem = styled.div`
  display: flex;
  width: 80px;
  font-weight: 600;
  color: #333333;
  justify-content: center;
  align-items: center;

  &:nth-child(3) {
    padding-left: 20px;
  }
`;
