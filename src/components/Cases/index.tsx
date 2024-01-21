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

import 'swiper/css';

export function Cases() {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  function initNavigation(sw: any) {
    sw.params.navigation.nextEl = nextRef.current;
    sw.params.navigation.prevEl = prevRef.current;
    sw.navigation.init();
  }

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
                <CarVertical />
              </SwiperSlide>
              <SwiperSlide>
                <CarVertical />
              </SwiperSlide>
              <SwiperSlide>
                <CarVertical />
              </SwiperSlide>
              <SwiperSlide>
                <CarVertical />
              </SwiperSlide>
              <SwiperSlide>
                <CarVertical />
              </SwiperSlide>
              <SwiperSlide>
                <CarVertical />
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  );
}
