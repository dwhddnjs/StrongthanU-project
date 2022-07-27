import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../../../components/Header';
import { RankHeader, RankTab } from '../components';

const rankData = [
  {
    gender: 'man',
    rankers: [
      {
        id: 1,
        tier: '다이아',
        body: 70,
        squat: 160,
        bench: 115,
        dead: 195,
        totalMultiple: 8,
      },
      {
        id: 2,
        tier: '골드',
        body: 60,
        squat: 170,
        bench: 125,
        dead: 115,
        totalMultiple: 8,
      },
      {
        id: 3,
        tier: '플레티넘',
        body: 80,
        squat: 120,
        bench: 105,
        dead: 205,
        totalMultiple: 8,
      },
    ],
  },
  {
    gender: 'woman',
    rankers: [
      {
        id: 1,
        tier: '다이아',
        body: 40,
        squat: 100,
        bench: 35,
        dead: 115,
        totalMultiple: 8,
      },
      {
        id: 2,
        tier: '챌린저',
        body: 50,
        squat: 110,
        bench: 45,
        dead: 135,
        totalMultiple: 8,
      },
      {
        id: 3,
        tier: '골드',
        body: 45,
        squat: 100,
        bench: 55,
        dead: 135,
        totalMultiple: 8,
      },
    ],
  },
];

const Rank = () => {
  const [gender, setGender] = useState('man' || 'woman');

  const handleGenderTab = (data: string) => {
    if (data === 'man') {
      setGender('man');
    } else if (data === 'woman') {
      setGender('woman');
    }
  };

  return (
    <RankContainer>
      <Header />
      <RankTitle>리프팅 랭킹</RankTitle>
      <TabTableWrapper>
        <RankTab onGenderTab={handleGenderTab} />
        <RankHeader />
        {rankData.map(
          (data) =>
            data.gender === gender && (
              <>
                {data.rankers.map((ranker) => (
                  <>
                    <span>{ranker.tier}</span>
                    <span>{ranker.body}</span>
                    <span>{ranker.squat}</span>
                    <span>{ranker.bench}</span>
                    <span>{ranker.dead}</span>
                    <span>{ranker.dead}배</span>
                  </>
                ))}
              </>
            ),
        )}
      </TabTableWrapper>
    </RankContainer>
  );
};

export default Rank;

const RankContainer = styled.div``;

const RankTitle = styled.span`
  margin-left: 200px;
  font-size: 32px;
  font-weight: 800;
  color: #333333;
`;

const TabTableWrapper = styled.div`
  padding: 0 80px 0 80px;
`;
