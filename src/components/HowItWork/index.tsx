import { Col, Container, Row } from '@autrm/common/components/grid';
import { HeaderStyled, PilotStyled, RowStyled, SectionStyled, SubtitleStyled, TitleStyled } from './styled';
import works from '@autrm/datas/works.json';
import { Work } from './Work';

export function HowItWork() {
  return (
    <SectionStyled>
      <Container>
        <Row>
          <Col lg={12}>
            <HeaderStyled>
              <div>
                <TitleStyled>How Does It Work</TitleStyled>
                <SubtitleStyled>Here are some of the featured cars in different categories</SubtitleStyled>
              </div>
              <div>
                <a className="video-popup"><i className="bi bi-play-circle"></i> Watch video</a>
              </div>
            </HeaderStyled>
          </Col>
        </Row>
        <RowStyled>
          { works.map((item, i) => 
            <Col key={i} lg={3} sm={2}>
              <Work step={i+1} {...item} />
            </Col>
          ) }
        </RowStyled>
        <Row>
          <Col lg={12} justifyContent='center'>
            <PilotStyled>
              <strong>Excellent!</strong>
              <img src="assets/img/home1/icon/trustpilot-star2.svg" alt="" />
              <p>5.0 Rating out of <strong>5.0</strong> based on <a href="#"><strong>&nbsp;245354&nbsp;</strong>reviews</a></p>
              <img src="assets/img/home1/icon/trustpilot-logo.svg" alt="" />
            </PilotStyled>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  );
}
