import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  width: 100%;
  height: 56px;
  border-radius: 6px;
  padding: 16px;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray[700]};

    color: ${theme.colors.white};
    font-size: ${theme.fontSize.md};
    font-family: ${theme.fontFamily.regular};
  `}
`;
