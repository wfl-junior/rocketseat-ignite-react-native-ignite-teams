import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[600]};
  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[700]};

  flex-direction: row;
  align-items: center;

  border-radius: 6px;
`;
