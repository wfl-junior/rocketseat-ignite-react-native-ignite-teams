import "@react-navigation/native";
import { PlayersRouteParams } from "~/screens/Players";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      groups: undefined;
      "new-group": undefined;
      players: PlayersRouteParams;
    }
  }
}
