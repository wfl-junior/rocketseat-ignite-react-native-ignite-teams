import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useTheme } from "styled-components/native";
import { Button } from "~/components/Button";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { Input } from "~/components/Input";
import { createGroup } from "~/storage/groups/createGroup";
import { Container, Content, Icon } from "./styles";

export const NewGroup: React.FC = () => {
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const [group, setGroup] = useState("");

  async function handleAddNewGroup() {
    try {
      await createGroup(group);
      navigate("players", { group });
    } catch (error) {
      console.log(error);
    }
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

        <Input
          placeholder="Nome da turma"
          value={group}
          onChangeText={setGroup}
          autoCapitalize="words"
          autoCorrect={false}
          onSubmitEditing={handleAddNewGroup}
        />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleAddNewGroup}
        />
      </Content>
    </Container>
  );
};
