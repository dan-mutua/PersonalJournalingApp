import React from 'react';
import { registerRootComponent } from 'expo';
import AppNavigator from './navigation/AppNavigator';

const App: React.FC = () => {
  return <AppNavigator />;
};

export default App;

registerRootComponent(App);