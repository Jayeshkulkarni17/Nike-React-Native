import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import GetStarted from '../screens/GetStarted';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Setting from '../screens/Setting';
import Cart from '../screens/Cart';

type RootStackParamList = {
  Splash: undefined;
  GetStarted: undefined;
  Home: undefined;
  Search: undefined;
  Setting: undefined;
  Cart:undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createStackNavigator<RootStackParamList>();

function Routing() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Group
          screenOptions={{
            header: () => undefined,
          }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="Cart" component={Cart} />

        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routing;
