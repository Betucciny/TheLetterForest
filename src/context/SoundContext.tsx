import { createContext } from "react";

export const SoundContext = createContext<{ playSound: (soundFile: any) => Promise<void> }>({
    playSound: async () => {},
  });