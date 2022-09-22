import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUPS_STORAGE_KEY } from "../config";
import { getAllGroups } from "./getAllGroups";

export async function createGroup(newGroup: string) {
  const groups = await getAllGroups();

  await AsyncStorage.setItem(
    GROUPS_STORAGE_KEY,
    JSON.stringify([...groups, newGroup]),
  );
}
