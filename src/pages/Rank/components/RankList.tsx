import React, { FC } from 'react';
import styled from 'styled-components';

interface RankListTypes {
  ranker: {
    tier: string;
    body: number;
    squat: number;
    bench: number;
    dead: number;
  };
}

const RankList: FC<RankListTypes> = ({ ranker }) => {
  return (
    <RankItemContainer>
      <span>{ranker.tier}</span>
      <span>{ranker.body}</span>
      <span>{ranker.squat}</span>
      <span>{ranker.bench}</span>
      <span>{ranker.dead}</span>
      <span>{ranker.dead}배</span>
    </RankItemContainer>
  );
};

export default RankList;

const RankItemContainer = styled.div``;
