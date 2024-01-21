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

export function Cases() {
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
                <SliderBtnStyled>
                  <SVGIcon
                    type={ArrowLeft}
                    sizes={{
                      w: '9px',
                      h: '15px',
                    }}
                  />
                </SliderBtnStyled>
                <SliderBtnStyled>
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
            <CarVertical />
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  );
}
