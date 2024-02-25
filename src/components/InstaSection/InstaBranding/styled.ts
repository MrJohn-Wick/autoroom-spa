import { colorGrey400, colorPrimary } from '@autrm/common/tokens/colors';
import { ADAPTIVE } from '@autrm/common/tokens/screen';
import { getTextStyles } from '@autrm/common/utils/styles';
import { styled } from 'styled-components';

export const FollowStyled = styled.div`
  text-align: center;
  padding: 20px 20px;
  flex: 1 1 25%;
  display: flex;
  flex-direction: column;

  ${ADAPTIVE.maxWidth.tablet} {
    flex-direction: row;
    align-items: center;

    & > div:last-child {
      padding-left: 40px;
    }
  }

  ${ADAPTIVE.maxWidth.mobile} {
    flex-direction: column;
  }

  & a {
    color: ${colorPrimary};
  }
`;

export const TitleStyled = styled.div`
  ${getTextStyles('Montserrat', 600, 24, null)};
  margin-top: 30px;
`;

export const SubTitleStyled = styled.div`
  margin-top: 15px;
  color: ${colorGrey400};
`;

export const LinkStyled = styled.a`
  display: block;
  margin-top: 30px;
`;
