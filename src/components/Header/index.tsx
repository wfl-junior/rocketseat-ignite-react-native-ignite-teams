import logo from "~/assets/logo.png";
import { Container, Logo } from "./styles";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => (
  <Container>
    <Logo source={logo} />
  </Container>
);
