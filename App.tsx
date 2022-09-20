import { Fragment } from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Groups } from "~/screens/Groups";
import { defaultTheme } from "~/themes";

const App: React.FC = () => (
  <Fragment>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />

    <ThemeProvider theme={defaultTheme}>
      <Groups />
    </ThemeProvider>
  </Fragment>
);

export default App;
