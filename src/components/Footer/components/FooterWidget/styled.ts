import { getTextStyles } from "@autrm/common/utils/styles";
import styled from "styled-components";

export const TitleStyled = styled.h5`
    margin-bottom: 0;
    color: var(--white-color);
    margin-bottom: 23px;

    ${getTextStyles(null, 600, 20, null)}
`;