import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "~/utils/AppError";
import { getAllPlayersByGroup } from "./getAllPlayersByGroup";
import { getPlayersStorageKeyByGroup } from "./getPlayersStorageKeyByGroup";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function createPlayerByGroup(
  newPlayer: PlayerStorageDTO,
  group: string,
) {
  const players = await getAllPlayersByGroup(group);

  if (players.some(player => player.name === newPlayer.name)) {
    throw new AppError(
      "Esse participante já está cadastrado em um time nesse grupo.",
    );
  }

  await AsyncStorage.setItem(
    getPlayersStorageKeyByGroup(group),
    JSON.stringify([...players, newPlayer]),
  );
}
