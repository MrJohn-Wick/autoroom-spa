import { styled } from 'styled-components';

export const ContractStyled = styled.div`
  margin: 30px 0;

  & h2 {
    text-align: center;
  }
  & div {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
  }
  & div span {
    flex-shink: 1;
  }
  & p {
    margin: 10px 0;
    text-align: justify;
    text-indent: 1.5em;
  }
  & h3 {
    text-align: center;
    margin-top: 30px;
  }
  & li {
    margin-left: 4rem;
  }
  & table {
    width: 100%;
    border-collapse: collapse;
  }
  & table td {
    width: 50%;
    border: 1px solid #000;
  }
  & table td p {
    text-indent: 0;
    margin-left: 10px;
  }
`;
