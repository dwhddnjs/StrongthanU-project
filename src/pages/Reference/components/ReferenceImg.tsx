import React, { FC } from 'react';
import styled from 'styled-components';

interface ReferenceImgTypes {
  img: string;
}

const ReferenceImg: FC<ReferenceImgTypes> = ({ img }) => {
  return (
    <ReferenceImgContainer>
      <img src={img} alt="" width={600} />
    </ReferenceImgContainer>
  );
};

export default ReferenceImg;

const ReferenceImgContainer = styled.div`
  margin: 15px 35px 15px 35px;
  img {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 20px, rgba(0, 0, 0, 0.22) 0px 7.5px 6px;
  }
`;
