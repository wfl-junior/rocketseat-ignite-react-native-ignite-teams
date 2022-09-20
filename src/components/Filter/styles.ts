import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  border: 1px solid
    ${({ theme, isActive }) => {
      return isActive ? theme.colors.green[500] : theme.colors.gray[600];
    }};

  border-radius: 4px;
  margin-right: 12px;

  width: 70px;
  height: 38px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.sm};
    font-family: ${theme.fontFamily.bold};
  `}
`;
