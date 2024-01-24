import { useGlobalState } from "@/context/ListStateContext";
import List from "../List";
import getComicsData from "@/services/comics";
import { useState, useEffect } from "react";

const ComicsList = () => {
  const { comicActivo, setComicActivo, characterActivo, setCharacterActivo, storyActivo, setStoryActivo } = useGlobalState();

  useEffect(() => {
    setComicActivo(1);

   
    return () => {
      setComicActivo(1);
      setCharacterActivo(null);
      setStoryActivo(null);
    };
  }, []);

  useEffect(() => {
  
  }, [comicActivo]);

 
  if (comicActivo !== 1 && characterActivo === null && storyActivo === null) {
    return null;
  }

  return <List fetchData={getComicsData} />;
};

export default ComicsList;