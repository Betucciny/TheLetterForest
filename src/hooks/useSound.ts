import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

export function useSound() {
  const [sound, setSound] = useState<Audio.Sound | undefined>();

  async function playSound(soundFile: any) {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync(soundFile);
    setSound(newSound);
    await newSound.setIsLoopingAsync(true);
    await newSound.playAsync();
    newSound.setOnPlaybackStatusUpdate(async (status) => {
      if (!status.isLoaded) return;
      if (status.didJustFinish) {
        await newSound.unloadAsync();
        playSound(require('@assets/music/main.mp3'));
      }
    });
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return { playSound };
}