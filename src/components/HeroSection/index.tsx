import iX from '@autrm/assets/bmw_ix.png';
import SearchIcon from '@autrm/assets/icons/search.svg';
import { SVGIcon } from '@autrm/common/components/svg-icon';

import { HeadingLevel1Styled, HeroSectionStyled, SearchStyled } from './styled';

export function HeroSection() {
  return (
    <HeroSectionStyled>
      <HeadingLevel1Styled>Авто из США</HeadingLevel1Styled>
      <SearchStyled>
        <input
          type="text"
          placeholder="VIN"
        />
        <button
          className="btn-submit btn w-100 btn-theme no-text"
          type="submit"
        >
          <SVGIcon
            type={SearchIcon}
            sizes={{
              w: '16px',
              h: '16px',
            }}
          />
        </button>
      </SearchStyled>
      {/* <img
        // @ts-ignore
        fetchpriority="high"
        decoding="async"
        width="1166"
        height="356"
        src="https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51.png"
        class="attachment-full size-full wp-image-5583"
        alt=""
        srcset="https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51.png 1166w, https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51-300x92.png 300w, https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51-1024x313.png 1024w, https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51-768x234.png 768w, https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51-600x183.png 600w"
        sizes="(max-width: 1166px) 100vw, 1166px"
      /> */}
      <img
        src={iX}
        width="1066"
        height="336"
        alt=""
      />
    </HeroSectionStyled>
  );
}
