import AsyncStorage from "@react-native-async-storage/async-storage";
import { getPlayersStorageKeyByGroup } from "./getPlayersStorageKeyByGroup";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function getAllPlayersByGroup(
  group: string,
): Promise<PlayerStorageDTO[]> {
  const existingPlayers = await AsyncStorage.getItem(
    getPlayersStorageKeyByGroup(group),
  );

  return existingPlayers ? JSON.parse(existingPlayers) : [];
}
