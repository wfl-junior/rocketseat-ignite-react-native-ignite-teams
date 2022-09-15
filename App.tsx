import { Fragment } from "react";
import { StatusBar } from "react-native";
import { Groups } from "./src/screens/Groups";

const App: React.FC = () => (
  <Fragment>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />

    <Groups />
  </Fragment>
);

export default App;
