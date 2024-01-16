import { styled } from 'styled-components';

export const ListStyled = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    & li {
        margin: 0;
        padding: 0;
        margin-bottom: 8px;
    }

    & li a {
        text-decoration: none;
        color: #b3b3b3;
        font-size: 15px;
        font-weight: 600;
        transition: .35s;
        display: flex;
        align-items: center;
        gap: 7px;
        transition: .35s;
    }

    & li a:hover {
        color: #fff;
    }

`;