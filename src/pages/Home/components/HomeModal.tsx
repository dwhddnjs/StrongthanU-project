import React from 'react';
import styled from 'styled-components';

const HomeModal = () => {
  return (
    <ModalContainer>
      <ModalLayout>
        <ModalForm>
          <ModalDesc>체중 및 3대중량을 입력해주세요</ModalDesc>
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
  border: 1px solid;
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
  border: 1px solid red;
  background-color: #ffffff;
  color: #333333;
`;

const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  height: 100%;
`;

const ModalDesc = styled.span`
  border-bottom: 1px solid #000000;
  font-size: 24px;
`;

const TitleInputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const ModalTitle = styled.span``;

const ModalInput = styled.input``;
