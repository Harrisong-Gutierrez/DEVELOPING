import { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

export const GlobalStateProvider = ({ children }) => {
  const [storyActivo, setStoryActivo] = useState(null);
  const [characterActivo, setCharacterActivo] = useState(null);
  const [comicActivo, setComicActivo] = useState(null);

  const value = {
    storyActivo,
    setStoryActivo,
    characterActivo,
    setCharacterActivo,
    comicActivo,
    setComicActivo,
  };

  return <GlobalStateContext.Provider value={value}>{children}</GlobalStateContext.Provider>;
};

