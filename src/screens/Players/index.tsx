import { useState } from "react";
import { FlatList } from "react-native";
import { Filter } from "~/components/Filter";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { IconButton } from "~/components/IconButton";
import { Input } from "~/components/Input";
import { PlayerCard } from "~/components/PlayerCard";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

const teams = ["Time A", "Time B"];

export const Players: React.FC = () => {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<string[]>(["Wallace"]);

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
        renderItem={({ item }) => (
          <PlayerCard name={item} onDelete={() => {}} />
        )}
      />
    </Container>
  );
};
