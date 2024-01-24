import List from "../List";
import getCharacterData from "@/services/characters";
import  { useState, useEffect } from 'react';

const CharactersList = () => {
  const [characterActivo, setCharacterActivo] = useState(0);

  console.log(characterActivo)

  useEffect(() => {
    return () => {
      setCharacterActivo(0);
    };
  }, []);

  useEffect(() => {
  }, [characterActivo]);

  return <List fetchData={getCharacterData} />;
};

export default CharactersList;