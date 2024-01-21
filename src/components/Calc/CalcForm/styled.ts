import { styled } from 'styled-components';

export const FormWrapperStyled = styled.div`
  & .ant-select {
    display: block;
    width: 100%;
  }

  & .ant-input-number {
    width: 100%;
  }
`;

export const HorizontalWrapperStyled = styled.div`
  display: flex;
  gap: 20px;
`;

export const HorElStyled = styled.div`
  flex-grow: 1;
`;

export const FormFieldStyled = styled.div`
  margin-bottom: 20px;
`;
