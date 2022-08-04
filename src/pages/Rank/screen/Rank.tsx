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
  query FilterGenderRankers {
    womanRankers {
      nickname
      gender
      body
      squat
      dead
      bench
    }
    manRankers {
      nickname
      gender
      body
      squat
      bench
      dead
    }
  }
`;

const Rank = () => {
  const [gender, setGender] = useState('man' || 'woman');
  const { data, loading, error } = useQuery(RANkERS);
  console.log('data: ', data);

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
        {gender === 'woman' ? (
          <>
            {data?.womanRankers?.map((ranker: any) => (
              <RankList ranker={ranker} key={ranker.length} />
            ))}
          </>
        ) : (
          <>
            {data?.manRankers?.map((ranker: any) => (
              <RankList ranker={ranker} key={ranker.length} />
            ))}
          </>
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
