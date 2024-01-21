import { useRef } from 'react';
import { Col, Container, Row } from '@autrm/common/components/grid';
import { SVGIcon } from '@autrm/common/components/svg-icon';
import { HeadingLevel2 } from '@autrm/common/tokens/typography';
import ArrowLeft from '@autrm/assets/icons/slider/left.svg';
import ArrowRight from '@autrm/assets/icons/slider/right.svg';
import {
  SectionStyled,
  SliderBtnStyled,
  SliderButtonsStyled,
  TitleStyled,
  TitleWrapperStyled,
} from './styled';
import { CarVertical } from '../Cars/CarVertical';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import car1 from '@autrm/assets/cars/feature-car-01.png';
import car2 from '@autrm/assets/cars/feature-car-02.png';
import car3 from '@autrm/assets/cars/feature-car-03.png';
import car4 from '@autrm/assets/cars/feature-car-04.png';

import 'swiper/css';

export function Cases() {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  function initNavigation(sw: any) {
    sw.params.navigation.nextEl = nextRef.current;
    sw.params.navigation.prevEl = prevRef.current;
    sw.navigation.init();
  }

  const cars = [
    {
      price: '$7,656.00',
      image: car1,
      location: 'Panama City',
      title: 'Mercedes-Benz Class-2023',
      href: '/car-deatils',
    },
    {
      price: '$5,2346.00',
      image: car2,
      location: 'Panama City',
      title: 'Nissan Altima S-2022',
      href: '/car-deatils',
    },
    {
      price: '$3,678.00',
      image: car3,
      location: 'Panama City',
      title: 'Nissan Altima S-2022',
      href: '/car-deatils',
    },
    {
      price: '$9,231.00',
      image: car4,
      location: 'Panama City',
      title: 'Nissan Altima S-2022',
      href: '/car-deatils',
    },
    {
      price: '$17,656.00',
      image: car1,
      location: 'Panama City',
      title: 'Nissan Altima S-2022',
      href: '/car-deatils',
    },
    {
      price: '$10,456.00',
      image: car1,
      location: 'Panama City',
      title: 'Nissan Altima S-2022',
      href: '/car-deatils',
    },
  ];

  return (
    <SectionStyled>
      <Container>
        <Row mb="50px">
          <Col>
            <TitleWrapperStyled>
              <TitleStyled>
                <HeadingLevel2>Featured Cars</HeadingLevel2>
                <p>To get the most accurate and up-to-date information.</p>
              </TitleStyled>
              <SliderButtonsStyled>
                <SliderBtnStyled ref={prevRef}>
                  <SVGIcon
                    type={ArrowLeft}
                    sizes={{
                      w: '9px',
                      h: '15px',
                    }}
                  />
                </SliderBtnStyled>
                <SliderBtnStyled ref={nextRef}>
                  <SVGIcon
                    type={ArrowRight}
                    sizes={{
                      w: '9px',
                      h: '15px',
                    }}
                  />
                </SliderBtnStyled>
              </SliderButtonsStyled>
            </TitleWrapperStyled>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Swiper
              navigation={true}
              spaceBetween={25}
              slidesPerView={4}
              onAfterInit={initNavigation}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <CarVertical {...cars[0]} />
              </SwiperSlide>
              <SwiperSlide>
                <CarVertical {...cars[1]} />
              </SwiperSlide>
              <SwiperSlide>
                <CarVertical {...cars[2]} />
              </SwiperSlide>
              <SwiperSlide>
                <CarVertical {...cars[3]} />
              </SwiperSlide>
              <SwiperSlide>
                <CarVertical {...cars[4]} />
              </SwiperSlide>
              <SwiperSlide>
                <CarVertical {...cars[5]} />
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  );
}
