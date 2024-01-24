import List from "../List";
import getComicsData from "@/services/comics";
import {useState, useEffect } from "react";

const ComicsList = () => {
  const [comicActivo, setComicActivo] = useState(1);

  console.log(comicActivo)

  useEffect(() => {
    return () => {
      setComicActivo(1);
    };
  }, []);

  useEffect(() => {
  }, [comicActivo]);


  return <List fetchData={getComicsData} />;
};

export default ComicsList;
