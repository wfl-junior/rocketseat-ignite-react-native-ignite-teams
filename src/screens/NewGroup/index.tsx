import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Button } from "~/components/Button";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { Input } from "~/components/Input";
import { Container, Content, Icon } from "./styles";

export const NewGroup: React.FC = () => {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  function handleAddNewGroup() {
    navigate("players", { group: "Rocketseat" });
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon size={56} color={colors.green[500]} />

        <Highlight
          title="Nova turma"
          subtitle="Crie uma turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleAddNewGroup}
        />
      </Content>
    </Container>
  );
};
