import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

export default function useSound() {
  const [sound, setSound] = useState<Audio.Sound | undefined>();

  async function playSound(soundFile: any) {
    if (sound) {
      try {
        await sound.unloadAsync();
      }
      catch (e) {
        console.log(e)
      }
    }
    try {
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
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    return sound
      ? () => {
        try {
          sound.unloadAsync();
        }
        catch (e) {
          console.log(e)
        }
      }
      : undefined;
  }, [sound]);

  return { playSound };
}