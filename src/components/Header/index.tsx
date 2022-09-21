import { useNavigation } from "@react-navigation/native";
import { CaretLeft } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import logo from "~/assets/logo.png";
import { BackButton, Container, Logo } from "./styles";

interface HeaderProps {
  showBackButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showBackButton = false }) => {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  function handleGoHome() {
    navigate("groups");
  }

  return (
    <Container showBackButton={showBackButton}>
      {showBackButton && (
        <BackButton onPress={handleGoHome}>
          <CaretLeft color={colors.white} size={32} />
        </BackButton>
      )}

      <Logo source={logo} />
    </Container>
  );
};
