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
import miles from '@autrm/assets/icons/features/miles.svg';
import menual from '@autrm/assets/icons/features/menual.svg';
import fuel from '@autrm/assets/icons/features/fuel.svg';
import electric from '@autrm/assets/icons/features/electric.svg';
import { Feature, Features } from '../common/Features';
import { Location } from '../common/Location';
import { ContentButtom } from '../common/ContentButtom';
import { Title } from '../common/Title';
import type { CarVerticalProps } from './types';

export function CarVertical(props: CarVerticalProps) {
  return (
    <CardStyled>
      <CardImgStyled>
        <CardPriceStyled>
          <span>{props.price}</span>
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
        <Image src={props.image} />
      </CardImgStyled>
      <CardContentStyled>
        <Location>{props.location}</Location>
        <Title href={props.href}>{props.title}</Title>
        <Features>
          <Feature icon={miles}>2500 miles</Feature>
          <Feature icon={menual}>Automatic</Feature>
          <Feature icon={fuel}>Petrol</Feature>
          <Feature icon={electric}>Electric</Feature>
        </Features>
        <ContentButtom href={props.href}>View Details</ContentButtom>
      </CardContentStyled>
    </CardStyled>
  );
}
