import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Navigation from './Navigation';

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}

