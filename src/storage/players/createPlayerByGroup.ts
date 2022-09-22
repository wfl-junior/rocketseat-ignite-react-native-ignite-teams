import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYERS_STORAGE_KEY } from "../config";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function createPlayerByGroup(
  newPlayer: PlayerStorageDTO,
  group: string,
) {
  await AsyncStorage.setItem(
    `${PLAYERS_STORAGE_KEY}-${group}`,
    JSON.stringify([newPlayer]),
  );
}
