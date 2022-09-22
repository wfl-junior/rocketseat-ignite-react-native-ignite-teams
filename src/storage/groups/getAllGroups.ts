import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUPS_STORAGE_KEY } from "../config";

export async function getAllGroups(): Promise<string[]> {
  const existingGroups = await AsyncStorage.getItem(GROUPS_STORAGE_KEY);
  return existingGroups ? JSON.parse(existingGroups) : [];
}
