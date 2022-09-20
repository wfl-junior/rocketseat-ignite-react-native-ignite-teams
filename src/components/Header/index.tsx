import { CaretLeft } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import logo from "~/assets/logo.png";
import { BackButton, Container, Logo } from "./styles";

interface HeaderProps {
  showBackButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showBackButton = false }) => {
  const { colors } = useTheme();

  return (
    <Container showBackButton={showBackButton}>
      {showBackButton && (
        <BackButton>
          <CaretLeft color={colors.white} size={32} />
        </BackButton>
      )}

      <Logo source={logo} />
    </Container>
  );
};
