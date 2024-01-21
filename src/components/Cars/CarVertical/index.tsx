import { SVGIcon } from '@autrm/common/components/svg-icon';
import {
  CardContentStyled,
  CardFavStyled,
  CardImgStyled,
  CardPriceStyled,
  CardStyled,
} from './styled';
import HeartIcon from '@autrm/assets/icons/heart.svg';
import { Image } from '@autrm/common/components/image';
import car from '@autrm/assets/cars/feature-car-01.png';
import miles from '@autrm/assets/icons/features/miles.svg';
import menual from '@autrm/assets/icons/features/menual.svg';
import fuel from '@autrm/assets/icons/features/fuel.svg';
import electric from '@autrm/assets/icons/features/electric.svg';
import { Feature, Features } from '../common/Features';
import { Location } from '../common/Location';
import { ContentButtom } from '../common/ContentButtom';
import { Title } from '../common/Title';

export function CarVertical() {
  return (
    <CardStyled>
      <CardImgStyled>
        <CardPriceStyled>
          <span>$7,656.00</span>
        </CardPriceStyled>
        <CardFavStyled
          href="#"
          className="fav"
        >
          <SVGIcon
            type={HeartIcon}
            sizes={{
              w: '14px',
              h: '14x',
            }}
          />
        </CardFavStyled>
        <Image src={car} />
      </CardImgStyled>
      <CardContentStyled>
        <Location>Panama City</Location>
        <Title href="/car-deatils">Mercedes-Benz Class-2023</Title>
        <Features>
          <Feature icon={miles}>2500 miles</Feature>
          <Feature icon={menual}>Automatic</Feature>
          <Feature icon={fuel}>Petrol</Feature>
          <Feature icon={electric}>Electric</Feature>
        </Features>
        <ContentButtom href="/car-deatils">View Details</ContentButtom>
      </CardContentStyled>
    </CardStyled>
  );
}
