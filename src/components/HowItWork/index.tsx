import PlayIcon from '@autrm/assets/icons/play.svg';
import AuctionIcon from '@autrm/assets/icons/steps/auction.svg';
import DeliveryIcon from '@autrm/assets/icons/steps/delivery.svg';
import LocationIcon from '@autrm/assets/icons/steps/location.svg';
import ShipIcon from '@autrm/assets/icons/steps/ship.svg';
import { Button } from '@autrm/common/components/button';
import { Col, Container, Row } from '@autrm/common/components/grid';
import { SVGIcon } from '@autrm/common/components/svg-icon';

import { Work } from './Work';
import {
  HeaderStyled,
  PilotStyled,
  RowStyled,
  SectionStyled,
  SubtitleStyled,
  TitleStyled,
} from './styled';

export function HowItWork() {
  return (
    <SectionStyled>
      <Container>
        <Row>
          <Col lg={12}>
            <HeaderStyled>
              <div>
                <TitleStyled>How Does It Work</TitleStyled>
                <SubtitleStyled>
                  Here are some of the featured cars in different categories
                </SubtitleStyled>
              </div>
              <div>
                <Button type="blacked">
                  <SVGIcon
                    type={PlayIcon}
                    sizes={{
                      w: '15px',
                      h: '15px',
                    }}
                  />
                  <span>Watch video</span>
                </Button>
              </div>
            </HeaderStyled>
          </Col>
        </Row>
        <RowStyled>
          <Col
            lg={3}
            md={4}
            sm={4}
          >
            <Work
              step="01"
              icon={AuctionIcon}
              title="Аукцион"
              content="Участие в аукционе по покупке автомобиля."
            />
          </Col>
          <Col
            lg={3}
            md={4}
            sm={4}
          >
            <Work
              step="02"
              icon={DeliveryIcon}
              title="Доставка в порт"
              content="Транспортировка автомобиля в порт, для погрузки на судно."
            />
          </Col>
          <Col
            lg={3}
            md={4}
            sm={4}
          >
            <Work
              step="03"
              icon={ShipIcon}
              title="Доставка до Клайпеды"
              content="Транспортировка морским контейнером до порта Клайпеды"
            />
          </Col>
          <Col
            lg={3}
            md={4}
            sm={4}
          >
            <Work
              step="04"
              icon={LocationIcon}
              title="Доставка Минск/Витебск"
              content="Оформление таможенных документов и доставка в Минск/Витебск"
            />
          </Col>
        </RowStyled>
        <Row>
          <Col
            lg={12}
            justifyContent="center"
          >
            <PilotStyled>
              <strong>Excellent!</strong>
              <img
                src="assets/img/home1/icon/trustpilot-star2.svg"
                alt=""
              />
              <p>
                5.0 Rating out of <strong>5.0</strong> based on{' '}
                <a href="/#">
                  <strong>&nbsp;245354&nbsp;</strong>reviews
                </a>
              </p>
              <img
                src="assets/img/home1/icon/trustpilot-logo.svg"
                alt=""
              />
            </PilotStyled>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  );
}
