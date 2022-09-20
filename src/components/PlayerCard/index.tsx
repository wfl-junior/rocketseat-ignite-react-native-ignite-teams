import { useTheme } from "styled-components/native";
import { IconButton } from "../IconButton";
import { Container, Icon, Name } from "./styles";

interface PlayerCardProps {
  name: string;
  onDelete: () => void;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ name, onDelete }) => {
  const { colors } = useTheme();

  return (
    <Container>
      <Icon name="person" size={24} color={colors.gray[200]} />
      <Name>{name}</Name>
      <IconButton icon="close" type="secondary" onPress={onDelete} />
    </Container>
  );
};
