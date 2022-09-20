import { useState } from "react";
import { FlatList } from "react-native";
import { Button } from "~/components/Button";
import { GroupCard } from "~/components/GroupCard";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { ListEmpty } from "~/components/ListEmpty";
import { Container } from "./styles";

export const Groups: React.FC = () => {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={group => group}
        renderItem={({ item: group }) => <GroupCard title={group} />}
        contentContainerStyle={!groups.length ? { flex: 1 } : undefined}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button title="Criar nova turma" />
    </Container>
  );
};
