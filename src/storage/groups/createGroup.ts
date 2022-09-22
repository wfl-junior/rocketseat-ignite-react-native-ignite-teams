import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "~/utils/AppError";
import { GROUPS_STORAGE_KEY } from "../config";
import { getAllGroups } from "./getAllGroups";

export async function createGroup(newGroup: string) {
  const groups = await getAllGroups();

  if (groups.includes(newGroup)) {
    throw new AppError("Já existe um grupo cadastrado com esse nome.");
  }

  await AsyncStorage.setItem(
    GROUPS_STORAGE_KEY,
    JSON.stringify([...groups, newGroup]),
  );
}
