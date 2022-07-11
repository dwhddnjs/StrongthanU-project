import React, { useEffect, useState } from 'react';
import dead from '../../../images/dead.jpg';
import squat from '../../../images/squat.jpg';
import ohp from '../../../images/ohp.jpg';
import bench from '../../../images/bench.jpg';
import styled from 'styled-components';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

const imgData = [
  {
    id: 1,
    image: dead,
  },
  {
    id: 2,
    image: bench,
  },
  {
    id: 3,
    image: squat,
  },
  {
    id: 4,
    image: ohp,
  },
];

const HomeCarousel = () => {
  const [current, setCurrent] = useState(1);

  const handleNextButton = () => {
    if (current === 4) {
      setCurrent(1);
    } else {
      setCurrent(current + 1);
    }
  };

  const handlePrevButton = () => {
    if (current === 1) {
      setCurrent(4);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <CarouselContainer>
      <CarouselArrowWrapper>
        <CarouselButton onClick={handlePrevButton}>
          <BiLeftArrow className="prev" />
        </CarouselButton>
        {imgData.map(
          (img) =>
            current === img.id && (
              <CarouselItem key={img.id}>
                <img src={img.image} alt="" width={800} height={550} />
                <DotWrapper>
                  {[0, 1, 2, 3, 4].map((el) => (
                    <Dot key={el}></Dot>
                  ))}
                </DotWrapper>
              </CarouselItem>
            ),
        )}
        <CarouselButton onClick={handleNextButton}>
          <BiRightArrow className="next" />
        </CarouselButton>
      </CarouselArrowWrapper>
    </CarouselContainer>
  );
};

export default HomeCarousel;

const CarouselContainer = styled.div`
  /* border: 1px solid; */
  display: flex;
  justify-content: end;
  padding: 80px;
`;

const CarouselItem = styled.div`
  width: 800px;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 50px;
  color: #ffffff;
  position: relative;
`;

const CarouselArrowWrapper = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  font-size: 50px;
  color: #333333;
  /* border-radius: 30px; */
  img {
    /* border-radius: 30px; */
    box-shadow: rgba(0, 0, 0, 0.3) 0px 40px 80px, rgba(0, 0, 0, 0.22) 0px 30px 24px;
  }
`;

const CarouselButton = styled.div`
  margin: 0 10px 0 10px;
`;

const DotWrapper = styled.div`
  position: absolute;
  display: flex;
  bottom: 20px;
  left: 350px;
  /* border: 1px solid; */
`;

const Dot = styled.div`
  background-color: #ffffff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  z-index: 10000;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;
