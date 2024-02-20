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
import { HeadingLevel1, RegularTextLevel1 } from '@autrm/common/tokens/typography';
import { Spinner } from '@autrm/components/Spinner';

import { ColStyled } from './styled';

export function Tracking() {
  const [serverData, setServerData] = useState({});
  const { id } = useParams();

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
          <Row lgMb="50px">
            <ColStyled lg={6}>
              <ul>
                <li>
                  <span>Наименование: </span>
                  {get(serverData, 'vehicleMake')} {get(serverData, 'vehicleModel')}
                </li>
                <li>
                  <span>VIN номер: </span>
                  {get(serverData, 'vehicleVinNo')}
                </li>
                <li>
                  <span>Аукцион: </span>
                  {get(serverData, 'auction')}
                </li>
                <li>
                  <span>Город: </span>
                  {get(serverData, 'auctionLocation')}
                </li>
                <li>
                  <span>Номер лота: </span>
                  {get(serverData, 'lotNo')}
                </li>
              </ul>
            </ColStyled>
            <ColStyled lg={6}>
              <ul>
                <li>
                  <span>Номер контейнера: </span>
                  {get(serverData, 'containerNumber')}
                </li>
                <li>
                  <span>Дата загрузки/отправки: </span>
                  {get(serverData, 'containerFinishLoadDate')}
                </li>
                <li>
                  <span>Номер фрахта: </span>
                  {get(serverData, 'bookingNumber')}
                </li>
                <li>
                  <span>Порт доставки: </span>
                  {get(serverData, 'finalDestinationPortTitle')}
                </li>
                <li>
                  <span>Ориентировочная дата доставки: </span>
                  {get(serverData, 'inttraDestinationEta')}
                </li>
                <li>
                  <span>Ссылка для отслеживания: </span>
                  <Link to={get(serverData, 'trackingUrl', '')}>
                    {get(serverData, 'trackingUrl')}
                  </Link>
                </li>
              </ul>
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
