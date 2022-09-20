import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { ButtonType } from ".";

interface ContainerProps {
  type: ButtonType;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 100%;
  height: 56px;
  border-radius: 6px;

  background-color: ${({ theme, type }) => {
    if (type === "secondary") {
      return theme.colors.red.dark;
    }

    return theme.colors.green[700];
  }};

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.md};
    font-family: ${theme.fontFamily.bold};
  `}
`;
