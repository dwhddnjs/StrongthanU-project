import React, { FC } from 'react';
import styled from 'styled-components';

import HomeStartBtn from './HomeStartBtn';

interface HomeInfoProps {
  onOpenForm: () => void;
}

const HomeInfo: FC<HomeInfoProps> = ({ onOpenForm }) => {
  return (
    <>
      <InfoContainer>
        <InfoTitle>
          당신의 강력함을
          <pre>측정 해보세요 .</pre>
        </InfoTitle>
        <InfoDesc>
          체중 및 3대중량을 입력시 본인의 3대중량 티어 및 체중대비 중량을 수치로 확인할 수 있습니다.
          <br /> 또한 본인의 기록을 체급별 랭킹에 등록이 가능하며 다양한 스트렝스 프로그램 정보를 확인해 보세요.
        </InfoDesc>
        <HomeStartBtn onOpenForm={onOpenForm} />
      </InfoContainer>
    </>
  );
};

export default HomeInfo;

const InfoContainer = styled.div`
  text-align: center;
`;
const InfoTitle = styled.div`
  font-size: 64px;
  font-weight: 700;
  line-height: 70px;
  margin-top: 80px;
  pre {
    font-size: 58px;
  }
`;
const InfoDesc = styled.p`
  margin-top: 20px;
  color: #333333;
`;
