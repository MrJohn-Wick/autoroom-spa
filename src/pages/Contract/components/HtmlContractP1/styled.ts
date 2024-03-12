import { styled } from 'styled-components';

export const P1Styled = styled.div`
  margin: 30px 0;

  & div {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
  }
  & div span {
    flex-shink: 1;
  }

  & p {
    text-indent: 1.5rem;
  }

  & ol {
    margin-left: 3rem;
  }
`;
