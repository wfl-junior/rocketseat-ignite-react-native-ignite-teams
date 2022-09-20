import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Icon, Title } from "./styles";

interface GroupCardProps extends TouchableOpacityProps {
  title: string;
}

export const GroupCard: React.FC<GroupCardProps> = ({ title, ...props }) => {
  const { colors } = useTheme();

  return (
    <Container {...props}>
      <Icon size={32} color={colors.green[500]} weight="fill" />
      <Title>{title}</Title>
    </Container>
  );
};
