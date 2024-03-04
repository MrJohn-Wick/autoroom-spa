import { useEffect, useState } from 'react';

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import './styles.css';

// import plugins if you need
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { isEmpty, get } from 'lodash';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { Col, Container, Row } from '@autrm/common/components/grid';
import { useWindowSize } from '@autrm/common/hooks/useWindowSize';
import { HeadingLevel1, RegularTextLevel1 } from '@autrm/common/tokens/typography';
import { Spinner } from '@autrm/components/Spinner';

import { ColLabelStyled, ColStyled, ColValueStyled, RowStyled } from './styled';

export function Tracking() {
  const [serverData, setServerData] = useState({});
  const { id } = useParams();
  const { isMobileView, isTabletView } = useWindowSize();

  useEffect(() => {
    if (!isEmpty(id)) {
      fetch(`https://clientbackend.atlanticexpresscorp.com/tracking/vin/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data: any) => {
          setServerData(data);
        });
    }
  }, [id]);

  return (
    <>
      {!isEmpty(serverData) ? (
        <Container
          pt="50px"
          pb="70px"
        >
          <Row mb="30px">
            <Col lg={12}>
              <HeadingLevel1>Данные о доставке авто</HeadingLevel1>
              <RegularTextLevel1>Какой то текст.</RegularTextLevel1>
            </Col>
          </Row>
          <Row
            mb="36px"
            mdMb="36px"
            lgMb="50px"
            style={
              isMobileView || isTabletView
                ? {
                    gap: '36px',
                  }
                : {
                    gap: 0,
                  }
            }
          >
            <ColStyled lg={6}>
              <RowStyled>
                <ColLabelStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  Наименование:{' '}
                </ColLabelStyled>
                <ColValueStyled
                  sm={4}
                  md={4}
                  lg={6}
                >{`${get(serverData, 'vehicleMake')} ${get(serverData, 'vehicleModel')}`}</ColValueStyled>
              </RowStyled>
              <RowStyled>
                <ColLabelStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  VIN номер:{' '}
                </ColLabelStyled>
                <ColValueStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  {get(serverData, 'vehicleVinNo')}
                </ColValueStyled>
              </RowStyled>
              <RowStyled>
                <ColLabelStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  Аукцион:{' '}
                </ColLabelStyled>
                <ColValueStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  {get(serverData, 'auction')}
                </ColValueStyled>
              </RowStyled>
              <RowStyled>
                <ColLabelStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  Город:{' '}
                </ColLabelStyled>
                <ColValueStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  {get(serverData, 'auctionLocation')}
                </ColValueStyled>
              </RowStyled>
              <RowStyled>
                <ColLabelStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  Номер лота:{' '}
                </ColLabelStyled>
                <ColValueStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  {get(serverData, 'lotNo')}
                </ColValueStyled>
              </RowStyled>
            </ColStyled>
            <ColStyled lg={6}>
              <RowStyled>
                <ColLabelStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  Номер контейнера:{' '}
                </ColLabelStyled>
                <ColValueStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  {get(serverData, 'containerNumber')}
                </ColValueStyled>
              </RowStyled>
              <RowStyled>
                <ColLabelStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  Дата загрузки/отправки:
                </ColLabelStyled>
                <ColValueStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  {get(serverData, 'containerFinishLoadDate')}
                </ColValueStyled>
              </RowStyled>
              <RowStyled>
                <ColLabelStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  Номер фрахта:{' '}
                </ColLabelStyled>
                <ColValueStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  {get(serverData, 'bookingNumber')}
                </ColValueStyled>
              </RowStyled>
              <RowStyled>
                <ColLabelStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  Порт доставки:{' '}
                </ColLabelStyled>
                <ColValueStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  {get(serverData, 'finalDestinationPortTitle')}
                </ColValueStyled>
              </RowStyled>
              <RowStyled>
                <ColLabelStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  Ориентировочная дата доставки:{' '}
                </ColLabelStyled>
                <ColValueStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  {get(serverData, 'inttraDestinationEta')}
                </ColValueStyled>
              </RowStyled>
              <RowStyled>
                <ColLabelStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  Ссылка для отслеживания:{' '}
                </ColLabelStyled>
                <ColValueStyled
                  sm={4}
                  md={4}
                  lg={6}
                >
                  <Link to={get(serverData, 'trackingUrl', '')}>
                    {get(serverData, 'trackingUrl')}
                  </Link>
                </ColValueStyled>
              </RowStyled>
            </ColStyled>
          </Row>
          <Row>
            <ColStyled lg={12}>
              <LightGallery
                plugins={[lgZoom, lgVideo]}
                mode="lg-fade"
              >
                {get(serverData, 'inspectionImages', []).map((image: any) => (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a
                    key={image.id}
                    data-lg-size="1406-1390"
                    className="gallery-item"
                    data-src={image.full.path}
                    data-sub-html={`${get(serverData, 'vehicleMake')} ${get(serverData, 'vehicleModel')}`}
                  >
                    <img
                      className="img-responsive"
                      src={image.thumb.path}
                      alt=""
                    />
                  </a>
                ))}
              </LightGallery>
            </ColStyled>
          </Row>
        </Container>
      ) : (
        <Spinner />
      )}
    </>
  );
}
