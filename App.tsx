import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Fragment } from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Loading } from "~/components/Loading";
import { NewGroup } from "~/screens/NewGroup";
import { defaultTheme } from "~/themes";

const App: React.FC = () => {
  const [isFontReady] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <ThemeProvider theme={defaultTheme}>
        {isFontReady ? <NewGroup /> : <Loading />}
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
