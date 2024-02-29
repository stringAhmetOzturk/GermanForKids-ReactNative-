// MusicPlayerProvider.js

import React, { createContext, useState, useContext, useEffect } from 'react';
import { Audio } from 'expo-av';

const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const [val, setVal] = useState(true);
  const [sound, setSound] = useState(null);

  const changeMusicStatus = (newVal) => {
    setVal(newVal);
  };

  useEffect(() => {
    const playMusic = async () => {
      if (val) {
        const { sound } = await Audio.Sound.createAsync(
          require('../../assets/music/test.mp3'),
          { shouldPlay: true, isLooping: true }
        );

        setSound(sound);

        // Clean up
        return () => {
          if (sound) {
            sound.unloadAsync();
          }
        };
      } else {
        // Stop the music
        if (sound) {
          sound.stopAsync();
        }
      }
    };

    playMusic();
  }, [val]); // Only re-run the effect if val changes

  return <MusicPlayerContext.Provider value={{ val, changeMusicStatus }}>{children}</MusicPlayerContext.Provider>;
};

export const useMusic = () => {
  return useContext(MusicPlayerContext);
};
