import { useGlobalState } from "@/context/ListStateContext";
import List from "../List";
import getStoriesData from "@/services/stories";
import { useState, useEffect } from "react";

const StoriesList = () => {
  const { storyActivo, setStoryActivo, characterActivo, setCharacterActivo, comicActivo, setComicActivo } = useGlobalState();

  useEffect(() => {
    setStoryActivo(2);
    return () => {
      setStoryActivo(2);
      setCharacterActivo(null);
      setComicActivo(null);
    };
  }, []);

  useEffect(() => {
  }, [storyActivo]);

  if (storyActivo !== 2 && characterActivo === null && comicActivo === null) {
    return null;
  }

  return <List fetchData={getStoriesData} />;
};

export default StoriesList;
