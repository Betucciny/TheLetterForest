import { darkTheme, lightTheme } from '@/utils/theme';
import HomeScreen from '@/views/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SoundContext } from '@/context/SoundContext';
import { useSound } from '@hooks/useSound';
import SelectGame from '@views/SelectGame';
import Help from '@views/Help';
import Letters from '@views/Letters';
import Letter from '@views/Letter';
import Guessing from '@views/Guessing';
import { Letter as LetterType, getRandomLetters } from '@/utils/data';

export type RootStackParamList = {
  Home: undefined;
  Help: undefined;
  SelectGame: undefined;
  Letters: { randomLetters: LetterType[] };
  Letter: { letter: string, randomOffset: number[] };
  Guessing: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const colorScheme = useColorScheme();
  const paperTheme = colorScheme === 'dark' ? darkTheme : lightTheme;
  const { playSound } = useSound();

  useEffect(() => {
    playSound(require("@assets/music/main.mp3"));
    
  }, []);

  return (
    <SoundContext.Provider value={{ playSound }}>
      <PaperProvider theme={paperTheme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SelectGame" component={SelectGame} options={{ headerShown: false }} />
            <Stack.Screen name="Help" component={Help} options={{ headerShown: false }} />
            <Stack.Screen name="Letters" component={Letters} options={{ headerShown: false }} initialParams={{ randomLetters: getRandomLetters() }} />
            <Stack.Screen name="Guessing" component={Guessing} options={{ headerShown: false }} />
            <Stack.Screen name="Letter" component={Letter} options={{ headerShown: false }} initialParams={{ letter: "a" }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SoundContext.Provider>
  );
}

