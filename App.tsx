import { darkTheme, lightTheme } from '@/utils/theme';
import HomeScreen from '@/views/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {  useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';

export type RootStackParamList = {
  Home: undefined;
  Letters: undefined;
  Letter: undefined;
  Guessing: undefined;
};

const Stack = createNativeStackNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  const paperTheme = colorScheme === 'dark' ? darkTheme : lightTheme;
  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

