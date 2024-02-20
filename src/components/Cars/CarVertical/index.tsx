import fuel from '@autrm/assets/icons/features/fuel.svg';
import menual from '@autrm/assets/icons/features/menual.svg';
import miles from '@autrm/assets/icons/features/miles.svg';
import HeartIcon from '@autrm/assets/icons/heart.svg';
import { Image } from '@autrm/common/components/image';
import { SVGIcon } from '@autrm/common/components/svg-icon';

import { ContentButtom } from '../common/ContentButtom';
import { Feature, Features } from '../common/Features';
import { Location } from '../common/Location';
import { Title } from '../common/Title';

import {
  CardContentStyled,
  CardFavStyled,
  CardImgStyled,
  CardPriceStyled,
  CardStyled,
} from './styled';
import type { CarVerticalProps } from './types';

export function CarVertical({
  image,
  price,
  location,
  title,
  odometer,
  transmission,
  detailsLink,
  fuelType,
}: CarVerticalProps) {
  return (
    <CardStyled>
      <CardImgStyled>
        <CardPriceStyled>
          <span>{price}</span>
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
        <Image
          src={image}
          height={165}
          objectFit="cover"
        />
      </CardImgStyled>
      <CardContentStyled>
        <Location>{location}</Location>
        <Title href={detailsLink}>{title}</Title>
        <Features>
          <Feature icon={miles}>{odometer}</Feature>
          <Feature icon={menual}>{transmission}</Feature>
          <Feature icon={fuel}>{fuelType}</Feature>
        </Features>
        <ContentButtom href={detailsLink} />
      </CardContentStyled>
    </CardStyled>
  );
}
