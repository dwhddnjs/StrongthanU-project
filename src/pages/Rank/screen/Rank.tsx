import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Header } from '../../../components/Header';
import { RankHeader, RankList, RankTab } from '../components';
import { useQuery } from '@apollo/client';
import { FILTER_GENDER_RANKERS } from '../../../graphql/query';
import { RankerTypes } from '../../../types/RankerTypes';

const Rank: FC = () => {
  const [gender, setGender] = useState('man' || 'woman');
  const { data } = useQuery(FILTER_GENDER_RANKERS);

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
        <RankListWrapper>
          {gender === 'woman' ? (
            <>
              {data?.womanRankers?.map((ranker: RankerTypes, index: number) => (
                <RankList ranker={ranker} order={index} key={index} />
              ))}
            </>
          ) : (
            <>
              {data?.manRankers?.map((ranker: RankerTypes, index: number) => (
                <RankList ranker={ranker} order={index} key={index} />
              ))}
            </>
          )}
        </RankListWrapper>
      </TabTableWrapper>
    </RankContainer>
  );
};

export default Rank;

const RankContainer = styled.div``;

const RankListWrapper = styled.div`
  height: 600px;
  overflow-y: scroll;
  margin: 0px 80px 5px 80px;
`;

const RankTitle = styled.span`
  margin-left: 200px;
  font-size: 32px;
  font-weight: 800;
  color: #333333;
`;

const TabTableWrapper = styled.div`
  padding: 0 80px 0 80px;
`;
