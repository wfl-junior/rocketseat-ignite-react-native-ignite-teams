import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Alert, FlatList } from "react-native";
import { Button } from "~/components/Button";
import { Filter } from "~/components/Filter";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { IconButton } from "~/components/IconButton";
import { Input } from "~/components/Input";
import { ListEmpty } from "~/components/ListEmpty";
import { PlayerCard } from "~/components/PlayerCard";
import { createPlayerByGroup } from "~/storage/players/createPlayerByGroup";
import { getAllPlayersByGroup } from "~/storage/players/getAllPlayersByGroup";
import { AppError } from "~/utils/AppError";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

export interface PlayersRouteParams {
  group: string;
}

const teams = ["Time A", "Time B"];

export const Players: React.FC = () => {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<string[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");
  const { params } = useRoute();
  const { group } = params as PlayersRouteParams;

  async function handleAddPlayer() {
    try {
      const newPlayerNameTrimmed = newPlayerName.trim();

      if (!newPlayerNameTrimmed.length) {
        throw new AppError("Informe o nome do participante.");
      }

      await createPlayerByGroup({ name: newPlayerNameTrimmed, team }, group);
      const players = await getAllPlayersByGroup(group);
      console.log(players);
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert("Erro", error.message);
      }

      console.log(error);
      Alert.alert("Erro", "Não foi possível adicionar o participante.");
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="Adicione a galera e separe os times" />

      <Form>
        <Input
          placeholder="Nome do participante"
          autoCapitalize="words"
          autoCorrect={false}
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
        />

        <IconButton icon="add" onPress={handleAddPlayer} />
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
