import { useRef } from 'react';

import { HeadingLevel2 } from '@autrm/common/tokens/typography';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArrowLeft from '@autrm/assets/icons/slider/left.svg';
import ArrowRight from '@autrm/assets/icons/slider/right.svg';
import { Col, Container, Row } from '@autrm/common/components/grid';
import { SVGIcon } from '@autrm/common/components/svg-icon';

import 'swiper/css';
import { BREAKPOINT } from '@autrm/common/tokens/screen';

import { CarVertical } from '../Cars/CarVertical';

import {
  SectionStyled,
  SliderBtnStyled,
  SliderButtonsStyled,
  TitleStyled,
  TitleWrapperStyled,
} from './styled';

export function CardsCarousel({ title, description, list }: any) {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  function initNavigation(sw: any) {
    sw.params.navigation.nextEl = nextRef.current;
    sw.params.navigation.prevEl = prevRef.current;
    sw.navigation.init();
  }

  const swiperSettings = {
    navigation: true,
    spaceBetween: 25,
    slidesPerView: 4,
    onAfterInit: initNavigation,
    modules: [Navigation],
    breakpoints: {
      [BREAKPOINT.sm]: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      [BREAKPOINT.md]: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      [BREAKPOINT.lg]: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
    },
  };

  return (
    <SectionStyled>
      <Container>
        <Row mb="50px">
          <Col>
            <TitleWrapperStyled>
              <TitleStyled>
                <HeadingLevel2>{title}</HeadingLevel2>
                <p>{description}</p>
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
            <Swiper {...swiperSettings}>
              {list &&
                list.map((item: any) => (
                  <SwiperSlide>
                    <CarVertical {...item} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  );
}
