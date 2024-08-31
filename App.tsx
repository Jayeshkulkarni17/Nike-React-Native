import React from "react";
import { SafeAreaView } from "react-native";
import Routing from "./src/routing/Routing";

function App():React.JSX.Element {
  return(
    <SafeAreaView style={{flex:1}}>
      <Routing/>
    </SafeAreaView>
  )
}

export default App;