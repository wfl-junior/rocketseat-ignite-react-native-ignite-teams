import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUPS_STORAGE_KEY } from "../config";

export async function createGroup(newGroup: string) {
  const existingGroups = await AsyncStorage.getItem(GROUPS_STORAGE_KEY);
  const groups = existingGroups ? JSON.parse(existingGroups) : [];

  await AsyncStorage.setItem(
    GROUPS_STORAGE_KEY,
    JSON.stringify([...groups, newGroup]),
  );
}
