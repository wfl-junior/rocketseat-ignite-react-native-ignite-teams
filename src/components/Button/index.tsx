import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

export type ButtonType = "primary" | "secondary";

interface ButtonProps extends TouchableOpacityProps {
  type?: ButtonType;
  title: string;
}

export const Button: React.FC<ButtonProps> = ({
  type = "primary",
  title,
  ...props
}) => (
  <Container {...props} type={type}>
    <Title>{title}</Title>
  </Container>
);
