import List from "../List";
import getStoriesData from "@/services/stories";
import {useState, useEffect } from "react";

const StoriesList = () => {
  const [storyActivo, setStoryActivo] = useState(2);

  console.log(storyActivo)

  useEffect(() => {
    return () => {
      setStoryActivo(2);
    };
  }, []);

  useEffect(() => {
  }, [setStoryActivo]);

  return <List fetchData={getStoriesData} />;
};

export default StoriesList;
