import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";
import { Button } from "~/components/Button";
import { GroupCard } from "~/components/GroupCard";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { ListEmpty } from "~/components/ListEmpty";
import { getAllGroups } from "~/storage/groups/getAllGroups";
import { Container } from "./styles";

export const Groups: React.FC = () => {
  const [groups, setGroups] = useState<string[]>([]);
  const { navigate } = useNavigation();

  const fetchGroups = useCallback(() => {
    getAllGroups()
      .then(setGroups)
      .catch(error => {
        console.log(error);
        Alert.alert("Erro", "Não foi possível buscar os grupos.");
      });
  }, []);

  useFocusEffect(fetchGroups);

  function handleOpenGroup(group: string) {
    navigate("players", { group });
  }

  function handleNewGroup() {
    navigate("new-group");
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={group => group}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: group }) => (
          <GroupCard title={group} onPress={() => handleOpenGroup(group)} />
        )}
        contentContainerStyle={!groups.length ? { flex: 1 } : undefined}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
};
