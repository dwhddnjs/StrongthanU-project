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
  z-index: 100000;
`;

const ModalForm = styled.div``;

const TitleInputWrapper = styled.div``;

const ModalTitle = styled.span``;

const ModalInput = styled.input``;
