import List from "../List";
import getCharacterData from "@/services/characters";

const CharactersList = () => {
  return <List fetchData={getCharacterData} />;
};

export default CharactersList;
