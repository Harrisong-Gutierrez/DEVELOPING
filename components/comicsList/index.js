import { useState, useEffect } from "react";
import axios from "axios";
import md5 from "md5";
import Card from "../card";

const publicKey = "1cce2dd0f26a2ee7853817014d1d35e2";
const privateKey = "e73b818c048b80e597dfed16e6795e279cd23e57";
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

const ComicsList = () => {
  let page = 0;
  const [comics, setList] = useState([]);
  const [conteo, setConteo] = useState(page);
  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=20&offset=${conteo}`
      )
      .then((response) => {
        setList(response.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(comics);

  const generateComicsCards = () => {
    if (comics && comics.length > 0) {
      return comics.map((comic) => (
        <Card
          key={comic.id}
          width="325"
          height="330"
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          name={comic.title}
          description={comic.variantDescription}
          series={comic.series.name}
        />
      ));
    }
    return <p>No comic data available.</p>;
  };

  return (
    <div className="card flex-row flex-wrap align-self-md-stretch justify-content-center ">
      {generateComicsCards()}
    </div>
  );
};

export default ComicsList;
