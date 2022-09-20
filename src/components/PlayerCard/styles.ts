import { MaterialIcons } from "@expo/vector-icons";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 56px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray[500]};

  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
`;

export const Name = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.colors.gray[200]};
    font-size: ${theme.fontSize.md};
    font-family: ${theme.fontFamily.regular};
  `}
`;

export const Icon = styled(MaterialIcons)`
  margin-left: 16px;
  margin-right: 4px;
`;
