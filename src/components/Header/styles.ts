import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface ContainerProps {
  showBackButton: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ showBackButton }) => {
    return showBackButton ? "space-between" : "center";
  }};
`;

export const BackButton = styled(TouchableOpacity)``;

export const Logo = styled(Image)`
  width: 46px;
  height: 55px;
`;
