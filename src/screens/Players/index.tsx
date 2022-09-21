import { useState } from "react";
import { FlatList } from "react-native";
import { Button } from "~/components/Button";
import { Filter } from "~/components/Filter";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { IconButton } from "~/components/IconButton";
import { Input } from "~/components/Input";
import { ListEmpty } from "~/components/ListEmpty";
import { PlayerCard } from "~/components/PlayerCard";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

export interface PlayersRouteParams {
  group: string;
}

const teams = ["Time A", "Time B"];

export const Players: React.FC = () => {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<string[]>([]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome do participante" autoCorrect={false} />
        <IconButton icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          horizontal
          data={teams}
          keyExtractor={team => team}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={player => player}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PlayerCard name={item} onDelete={() => {}} />
        )}
        contentContainerStyle={!players.length ? { flex: 1 } : undefined}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
      />

      <Button title="Remover turma" type="secondary" />
    </Container>
  );
};
