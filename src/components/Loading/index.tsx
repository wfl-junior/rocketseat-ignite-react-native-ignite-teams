import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

export const Loading: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <ActivityIndicator size={48} color={colors.green[700]} />
    </Container>
  );
};
