import { colorGrey200, colorPrimary, colorText } from '@autrm/common/tokens/colors';
import { getTextStyles } from '@autrm/common/utils/styles';
import { styled } from 'styled-components';

export const SectionStyled = styled.section`
  margin: 100px 0;
`;

export const TitleStyled = styled.div`
  margin-bottom: 50px;

  & h2 {
    margin-bottom: 5px;
  }
  & p {
    ${getTextStyles('Open Sans', 400, 16, 26)};
    color: ${colorText};
  }
`;

export const ImageWrapperStyled = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;

  & img {
    aspect-ratio: 1/1;
    object-fit: cover;
  }
`;

export const FollowStyled = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid ${colorGrey200};

  & a {
    color: ${colorPrimary};
  }
`;
