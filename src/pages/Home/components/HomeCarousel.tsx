import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import dead from '../../../images/dead.jpg';
import squat from '../../../images/squat.jpg';
import ohp from '../../../images/ohp.jpg';
import bench from '../../../images/bench.jpg';
import styled from 'styled-components';

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 1000,

    // slide: 'div',
    arrows: true,
    draggable: true,
    prevArrow: <button type="button">Previous</button>,
    nextArrow: <button type="button">Next</button>,
  };

  return (
    <Slider {...settings}>
      <CarouselItem>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aut, dolorum cumque totam odio nam ea natus
          voluptatibus, excepturi eligendi nostrum adipisci pariatur, corporis enim aliquid nesciunt eaque molestiae
          amet?
        </p>
        <img src={squat} alt="" width="800px" />
      </CarouselItem>
      <CarouselItem>
        <img src={bench} alt="" width="800px" />
      </CarouselItem>
      <CarouselItem>
        <img src={dead} alt="" width="800px" />
      </CarouselItem>
      <CarouselItem>
        <img src={ohp} alt="" width="800px" />
      </CarouselItem>
    </Slider>
  );
};

export default HomeCarousel;
const CarouselContainer = styled.div`
  display: flex;
  border: 1px solid;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CarouselItem = styled.div`
  /* max-width: fit-content; */
  border: 1px solid;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 100;
  img {
    border-radius: 10px;
  }
`;
