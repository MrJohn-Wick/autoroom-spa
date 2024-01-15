import styled from 'styled-components';
import { getTextStyles } from '@autrm/common/utils/styles';
import { colorWhite } from '@autrm/common/tokens/colors';

export const TitleStyled = styled.h5`
    margin-bottom: 0;
    color: ${colorWhite};
    margin-bottom: 23px;

    ${getTextStyles(null, 600, 20, null)}
`;
