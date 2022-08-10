import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_RANKER } from '../../../graphql/mutation';
import { ALL_RANKERS } from '../../../graphql/query';

interface HomeModalProps {
  onCloseForm: () => void;
}

const HomeModal: FC<HomeModalProps> = ({ onCloseForm }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    nickname: '',
    gender: '',
    body: '',
    squat: '',
    bench: '',
    dead: '',
  });

  const [addRanker] = useMutation(ADD_RANKER, {
    update(cache, { data: { addRanker } }) {
      const {
        data: { allRankers },
      } = cache.readQuery({
        query: ALL_RANKERS,
      }) as any;

      cache.writeQuery({
        query: ALL_RANKERS,
        data: {
          allRankers: [...allRankers, addRanker],
        },
      });
    },
  });

  const handleCloseForm = () => {
    onCloseForm();
  };
  const [isSelected, setIsSelected] = useState('');
  const handleGenderBtn = (gender: string) => {
    if (gender === 'woman') {
      setInputValue({ ...inputValue, gender: '여자' });
      setIsSelected('woman');
    } else if (gender === 'man') {
      setInputValue({ ...inputValue, gender: '남자' });
      setIsSelected('man');
    }
  };

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleOnSubmit = () => {
    if (
      inputValue.body.length === 0 ||
      inputValue.squat.length === 0 ||
      inputValue.bench.length === 0 ||
      inputValue.gender.length === 0 ||
      inputValue.dead.length === 0 ||
      inputValue.nickname.length === 0
    ) {
      alert('양식의 맞게 작성해주세요.');
      return;
    }

    const parseData = {
      ...inputValue,
      body: parseInt(inputValue.body),
      bench: parseInt(inputValue.bench),
      dead: parseInt(inputValue.dead),
      squat: parseInt(inputValue.squat),
    };

    addRanker({
      variables: {
        rankerInput: parseData,
      },
    });
    localStorage.setItem('data', JSON.stringify(parseData));
    navigate('/tier');
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
            <ModalTitle>Nickname</ModalTitle>
            <ModalInput onChange={handleOnChange} value={inputValue.nickname} name="nickname" />
          </TitleInputWrapper>
          <TitleInputWrapper>
            <ModalTitle>Gender</ModalTitle>
            <GenderBtnWrapper>
              <GenderBtn onClick={() => handleGenderBtn('man')} selected={isSelected === 'man'}>
                남자
              </GenderBtn>
              <GenderBtn onClick={() => handleGenderBtn('woman')} selected={isSelected === 'woman'}>
                여자
              </GenderBtn>
            </GenderBtnWrapper>
          </TitleInputWrapper>
          <TitleInputWrapper>
            <ModalTitle>Body Weight</ModalTitle>
            <ModalInput onChange={handleOnChange} value={inputValue.body} name="body" />
          </TitleInputWrapper>
          <TitleInputWrapper>
            <ModalTitle>Squat</ModalTitle>
            <ModalInput onChange={handleOnChange} value={inputValue.squat} name="squat" />
          </TitleInputWrapper>
          <TitleInputWrapper>
            <ModalTitle>BenchPress</ModalTitle>
            <ModalInput onChange={handleOnChange} value={inputValue.bench} name="bench" />
          </TitleInputWrapper>
          <TitleInputWrapper>
            <ModalTitle>DeadLift</ModalTitle>
            <ModalInput onChange={handleOnChange} value={inputValue.dead} name="dead" />
          </TitleInputWrapper>
          <ModalMeasureBtn onClick={handleOnSubmit}>측정하기</ModalMeasureBtn>
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
  margin-bottom: 35px;
  font-weight: 800;
  padding: 0 10px 5px 10px;
  color: #3eb489;
  margin-top: 10px;
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
  color: #333333;
  padding: 3px;
`;

const ModalMeasureBtn = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 30px;
  border-radius: 15px;
  border: 1px solid #c4c4c4;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  background-color: #3eb489;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;

const GenderBtn = styled.span<{ selected: boolean }>`
  cursor: pointer;
  padding: 5px 20px 5px 20px;
  font-weight: 800;
  border-radius: 10px;
  font-size: 14px;

  background-color: ${(props) => (props.selected ? '#009dd8' : '#ffffff')};
  color: ${(props) => (props.selected ? '#ffffff' : '#333333')};
  border: ${(props) => (props.selected ? 'none' : '1.5px solid #c4c4c4')};
`;

const GenderBtnWrapper = styled.div`
  display: flex;
  width: 155px;
  justify-content: space-between;
`;
