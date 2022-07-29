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
      <RankListItem>{ranker.tier}</RankListItem>
      <RankListItem>{ranker.body}</RankListItem>
      <RankListItem>{ranker.squat}</RankListItem>
      <RankListItem>{ranker.bench}</RankListItem>
      <RankListItem>{ranker.dead}</RankListItem>
      <RankListItem>{ranker.dead}배</RankListItem>
    </RankItemContainer>
  );
};

export default RankList;

const RankItemContainer = styled.div`
  display: flex;
`;

const RankListItem = styled.span``;
