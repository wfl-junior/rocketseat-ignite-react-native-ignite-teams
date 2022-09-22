import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components/native";
import { Button } from "~/components/Button";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { Input } from "~/components/Input";
import { createGroup } from "~/storage/groups/createGroup";
import { AppError } from "~/utils/AppError";
import { Container, Content, Icon } from "./styles";

export const NewGroup: React.FC = () => {
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const [group, setGroup] = useState("");

  async function handleAddNewGroup() {
    try {
      const newGroup = group.trim();

      if (!newGroup.length) {
        throw new AppError("Informe o nome da turma.");
      }

      await createGroup(newGroup);
      navigate("players", { group: newGroup });
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert("Erro", error.message);
      }

      console.log(error);
      Alert.alert("Erro", "Não foi possível criar uma nova turma.");
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
