import { UsersThree } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[600]};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree)`
  align-self: center;
`;
