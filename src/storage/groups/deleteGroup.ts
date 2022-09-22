import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUPS_STORAGE_KEY } from "../config";
import { getPlayersStorageKeyByGroup } from "../players/getPlayersStorageKeyByGroup";
import { getAllGroups } from "./getAllGroups";

export async function deleteGroup(groupToDelete: string) {
  const groups = await getAllGroups();

  await Promise.all([
    AsyncStorage.setItem(
      GROUPS_STORAGE_KEY,
      JSON.stringify(groups.filter(group => group !== groupToDelete)),
    ),
    AsyncStorage.removeItem(getPlayersStorageKeyByGroup(groupToDelete)),
  ]);
}
