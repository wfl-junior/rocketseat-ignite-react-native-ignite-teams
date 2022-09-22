import { getAllPlayersByGroup } from "./getAllPlayersByGroup";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function getAllPlayersByGroupAndTeam(
  group: string,
  team: string,
): Promise<PlayerStorageDTO[]> {
  const players = await getAllPlayersByGroup(group);
  return players.filter(player => player.team === team);
}
