import { PLAYERS_STORAGE_KEY } from "../config";

export function getPlayersStorageKeyByGroup(group: string) {
  return `${PLAYERS_STORAGE_KEY}-${group}`;
}
