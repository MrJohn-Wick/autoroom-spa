import styled from 'styled-components';

export const LeftMenuStyled = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 30px;
  }

  li {
    list-style: none;
  }

  a {
    color: var(--text-color);
    font-family: var(--font-open-sans);
    font-size: 13px;
    font-weight: 600;
    transition: .35s;
  }
`;