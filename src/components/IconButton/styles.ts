import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { IconButtonType } from ".";

interface ContainerProps {
  type: IconButtonType;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 56px;
  height: 56px;

  align-items: center;
  justify-content: center;

  margin-left: 12px;
`;
