import { useGlobalState } from "@/context/ListStateContext";
import List from "../List";
import getStoriesData from "@/services/stories";
import { useState, useEffect } from "react";

const StoriesList = () => {
  const { storyActivo, setStoryActivo, characterActivo, setCharacterActivo, comicActivo, setComicActivo } = useGlobalState();

  useEffect(() => {
    // Set the default active list when the component mounts
    setStoryActivo(2);

    // Cleanup function to reset the active list when the component unmounts
    return () => {
      setStoryActivo(2);
      setCharacterActivo(null);
      setComicActivo(null);
    };
  }, []);

  useEffect(() => {
    // Your additional logic, if any, based on storyActivo
  }, [storyActivo]);

  // Return null if none of the lists is active
  if (storyActivo !== 2 && characterActivo === null && comicActivo === null) {
    return null;
  }

  return <List fetchData={getStoriesData} />;
};

export default StoriesList;
