import React from 'react';
import { Header } from '../../../components/Header';
import styled from 'styled-components';
import { TierDesc, TierImg } from '../components';
import { getTierInfo, getMultiple } from '../../../util';
import b from '../../../images/b.png';
import s from '../../../images/s.png';
import g from '../../../images/g.png';
import p from '../../../images/p.png';
import d from '../../../images/d.png';
import m from '../../../images/m.png';
import c from '../../../images/c.png';

const Tier = () => {
  const tierData = [
    {
      id: 0,
      tier: '브론즈',
      img: b,
      color: '#9D4A2F',
      desc: '데드리프트 기준으로 본인 몸무게 1배 미만 치는 당신은 선풍기 바람에 날라갈 정도의 멸치일 가능성이 높습니다 기초 근력 부족으로 인해 3대운동 훈련시 부상을 입을 위험이 있기에 바로 3대 운동을 진행하기 보단 맨몸 운동(푸쉬업, 맨몸스쿼트, 인버티드 로우, 등), 헬스장 머신으로 기초 근력 향상 과 자세 및 코어 잡는법을 연습 후 3대운동에 도전하는것을 추천드립니다. 혹여 진입 장벽이 높다면 헬스장 PT 또는 크로스핏을 교육 받는 것 또한 추천드립니다',
    },
    {
      id: 1,
      tier: '실버',
      img: s,
      color: '#688895',
    },
    {
      id: 2,
      tier: '골드',
      img: g,
      color: '#D1A23A',
    },
    {
      id: 3,
      tier: '플레티넘',
      img: p,
      color: '#15C460',
    },
    {
      id: 4,
      tier: '다이아',
      img: d,
      color: '#27217F',
    },
    {
      id: 5,
      tier: '마스터',
      img: m,
      color: '#B01DCE',
    },
    {
      id: 6,
      tier: '챌린저',
      img: c,
      color: '#ff6347',
    },
  ];

  const localData = JSON.parse(localStorage.getItem('data') as string);
  const multipleDead = getMultiple(localData.dead, localData.body);
  const currentTier = getTierInfo(tierData, multipleDead);

  return (
    <TierContainer>
      <Header />
      <ImgDescWrapper>
        <TierDesc
          currentTierTitle={currentTier.tier}
          currentTierColor={currentTier.color}
          currentTierDesc={currentTier.desc}
        />
        <TierImg currentTierImg={currentTier.img} />
      </ImgDescWrapper>
    </TierContainer>
  );
};

export default Tier;

const TierContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgDescWrapper = styled.div`
  margin-top: 30px;
  padding: 0px 80px 0 80px;
  display: flex;
  justify-content: center;
`;
