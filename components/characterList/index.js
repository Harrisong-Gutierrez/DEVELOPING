import { useState, useEffect } from "react";
import axios from "axios";
import md5 from "md5";
import Card from "../card";

const publicKey = "1cce2dd0f26a2ee7853817014d1d35e2";
const privateKey = "e73b818c048b80e597dfed16e6795e279cd23e57";
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

const CharactersList = () => {
  let page = 0;
  const [characters, setList] = useState([]);
  const [conteo, setConteo] = useState(page);
  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=20&offset=${conteo}`
      )
      .then((response) => {
        setList(response.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const generateCharacterCards = () => {
    if (characters && characters.length > 0) {
      return characters.map((character) => (
        <Card
          key={character.id}
          width="325"
          height="330"
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          name={character.name}
          description={character.description}
          modified={character.modified}
        />
      ));
    }
    return <p>No character data available.</p>;
  };

  return (
    <div className="card flex-row flex-wrap align-self-md-stretch justify-content-center ">
      {generateCharacterCards()}
    </div>
  );
};

export default CharactersList;
