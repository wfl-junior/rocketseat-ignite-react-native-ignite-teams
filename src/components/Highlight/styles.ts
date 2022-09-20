import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.xl};
    font-family: ${theme.fontFamily.bold};
  `}
`;

export const SubTitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.gray[300]};
    font-size: ${theme.fontSize.md};
    font-family: ${theme.fontFamily.regular};
  `}
`;
