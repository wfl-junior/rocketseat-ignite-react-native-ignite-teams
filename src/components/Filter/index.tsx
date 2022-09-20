import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface FilterProps extends TouchableOpacityProps {
  isActive?: boolean;
  title: string;
}

export const Filter: React.FC<FilterProps> = ({
  isActive = false,
  title,
  ...props
}) => (
  <Container isActive={isActive} {...props}>
    <Title>{title}</Title>
  </Container>
);
