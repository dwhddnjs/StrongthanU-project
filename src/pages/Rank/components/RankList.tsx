import React, { FC } from 'react';
import styled from 'styled-components';

type totalType = {
  weight: number;
  multiple: number;
};

interface RankListTypes {
  ranker: {
    id: number;
    tier: string;
    nickname: string;
    body: number;
    squat: number;
    bench: number;
    dead: number;
    total: totalType;
  };
}

const RankList: FC<RankListTypes> = ({ ranker }) => {
  return (
    <RankItemContainer>
      <RankListItem>{ranker.id}</RankListItem>
      <RankListItem>{ranker.nickname}</RankListItem>
      <RankListItem>
        <img src={ranker.tier} alt="" width={40} />
      </RankListItem>
      <RankListItem>{ranker.squat}</RankListItem>
      <RankListItem>{ranker.bench}</RankListItem>
      <RankListItem>{ranker.dead}</RankListItem>
      <RankListItem>
        {ranker.total.weight} / {ranker.total.multiple}배
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
  /* border: 1px solid; */

  &:nth-child(3) {
    /* border: 1px solid; */
    /* margin-left: 20px; */
    padding-left: 20px;
  }
`;
