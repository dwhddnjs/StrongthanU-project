import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../../../components/Header';
import { RankHeader, RankList, RankTab } from '../components';
import { useQuery, gql } from '@apollo/client';
import b from '../../../images/b.png';
import s from '../../../images/s.png';
import g from '../../../images/g.png';
import p from '../../../images/p.png';
import d from '../../../images/d.png';
import c from '../../../images/c.png';

const RANkERS = gql`
  query AllRankers {
    allRankers {
      nickname
      gender
      body
      squat
      bench
      dead
    }
  }
`;

const rankData = [
  {
    gender: 'man',
    rankers: [
      {
        id: 1,
        tier: d,
        nickname: '이종원',
        body: 70,
        squat: 160,
        bench: 115,
        dead: 195,
        total: {
          weight: 500,
          multiple: 8,
        },
      },
      {
        id: 2,
        tier: g,
        nickname: '이종투',
        body: 60,
        squat: 170,
        bench: 125,
        dead: 115,
        total: {
          weight: 500,
          multiple: 8,
        },
      },
      {
        id: 3,
        tier: p,
        nickname: '이종삼',
        body: 80,
        squat: 120,
        bench: 105,
        dead: 205,
        total: {
          weight: 500,
          multiple: 8,
        },
      },
    ],
  },
  {
    gender: 'woman',
    rankers: [
      {
        id: 1,
        tier: d,
        nickname: '이이구',
        body: 40,
        squat: 100,
        bench: 35,
        dead: 115,
        total: {
          weight: 500,
          multiple: 8,
        },
      },
      {
        id: 2,
        tier: c,
        nickname: '팔감아',
        body: 50,
        squat: 110,
        bench: 45,
        dead: 135,
        total: {
          weight: 500,
          multiple: 8,
        },
      },
      {
        id: 3,
        tier: g,
        nickname: '치키넝',
        body: 45,
        squat: 100,
        bench: 55,
        dead: 135,
        total: {
          weight: 500,
          multiple: 8,
        },
      },
    ],
  },
];

const Rank = () => {
  const { data, loading, error } = useQuery(RANkERS);
  console.log('data: ', data);

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
                    <RankList ranker={ranker} />
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
