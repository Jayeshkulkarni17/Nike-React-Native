import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/utils/Store';
import Routing from './src/routing/Routing';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Routing />
        <Toast />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
