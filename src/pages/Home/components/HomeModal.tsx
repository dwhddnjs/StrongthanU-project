import React, { FC } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

interface HomeModalProps {
  onCloseForm: () => void;
}

const HomeModal: FC<HomeModalProps> = ({ onCloseForm }) => {
  const handleCloseForm = () => {
    onCloseForm();
  };

  return (
    <ModalContainer>
      <ModalLayout>
        <ModalForm>
          <ModalCloseBtn onClick={handleCloseForm}>
            <MdClose />
          </ModalCloseBtn>
          <ModalDesc>무게를 kg 단위로 입력해주세요.</ModalDesc>
          <TitleInputWrapper>
            <ModalTitle>Body Weight</ModalTitle>
            <ModalInput />
          </TitleInputWrapper>
          <TitleInputWrapper>
            <ModalTitle>Squat</ModalTitle>
            <ModalInput />
          </TitleInputWrapper>
          <TitleInputWrapper>
            <ModalTitle>BenchPress</ModalTitle>
            <ModalInput />
          </TitleInputWrapper>
          <TitleInputWrapper>
            <ModalTitle>DeadLift</ModalTitle>
            <ModalInput />
          </TitleInputWrapper>
        </ModalForm>
      </ModalLayout>
    </ModalContainer>
  );
};

export default HomeModal;

const ModalContainer = styled.div`
  z-index: 10000;
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalLayout = styled.div`
  background-color: #ffffff;
  color: #333333;
`;

const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 30px 50px 30px 50px;
  position: relative;
`;

const ModalDesc = styled.span`
  font-size: 20px;
  margin-bottom: 30px;
  font-weight: 800;
  padding: 0 10px 5px 10px;
  color: #3eb489;
`;

const TitleInputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

const ModalTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const ModalInput = styled.input`
  padding: 3px 5px 3px 5px;
  font-size: 14px;
  border: none;
  border-bottom: 1.5px solid #c4c4c4;
  outline: none;
`;

const ModalCloseBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 22px;
  /* border: 1px solid; */
  color: #333333;
  padding: 3px;
`;
