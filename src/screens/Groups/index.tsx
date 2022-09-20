import { useState } from "react";
import { FlatList } from "react-native";
import { GroupCard } from "~/components/GroupCard";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
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
      />
    </Container>
  );
};
