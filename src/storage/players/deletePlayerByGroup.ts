import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllPlayersByGroup } from "./getAllPlayersByGroup";
import { getPlayersStorageKeyByGroup } from "./getPlayersStorageKeyByGroup";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function deletePlayerByGroup(
  playerName: PlayerStorageDTO["name"],
  group: string,
) {
  const players = await getAllPlayersByGroup(group);

  await AsyncStorage.setItem(
    getPlayersStorageKeyByGroup(group),
    JSON.stringify(players.filter(player => player.name !== playerName)),
  );
}
