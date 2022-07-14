import React, { FC } from 'react';
import styled from 'styled-components';

interface HomeStartBtnProps {
  onOpenForm: () => void;
}

const HomeStartBtn: FC<HomeStartBtnProps> = ({ onOpenForm }) => {
  const handleOpenForm = () => {
    onOpenForm();
  };

  return <StartButton onClick={handleOpenForm}>Get Started</StartButton>;
};

export default HomeStartBtn;

const StartButton = styled.button`
  width: 180px;
  height: 70px;
  margin-top: 50px;
  border-radius: 20px;
  border: 1px solid #c4c4c4;
  font-size: 22px;
  font-weight: 800;
  color: #ffffff;
  background-color: #3eb489;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;
