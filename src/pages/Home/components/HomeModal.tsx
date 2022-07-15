import React from 'react';
import styled from 'styled-components';

const HomeModal = () => {
  return (
    <ModalContainer>
      <ModalForm>
        <TitleInputWrapper>
          <ModalTitle>스쿼트</ModalTitle>
          <ModalInput />
        </TitleInputWrapper>
        <TitleInputWrapper>
          <ModalTitle>벤치</ModalTitle>
          <ModalInput />
        </TitleInputWrapper>
        <TitleInputWrapper>
          <ModalTitle>데드</ModalTitle>
          <ModalInput></ModalInput>
        </TitleInputWrapper>
        <TitleInputWrapper>
          <ModalTitle>체중</ModalTitle>
          <ModalInput></ModalInput>
        </TitleInputWrapper>
      </ModalForm>
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
  background-color: #000000;
  opacity: 0.2;
`;

const ModalForm = styled.div`
  border: 1px solid red;
  width: fit-content;
  background-color: #ffffff;
  opacity: 1;
`;

const TitleInputWrapper = styled.div``;

const ModalTitle = styled.span``;

const ModalInput = styled.input``;
