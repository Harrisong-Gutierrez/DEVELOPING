import { useState, useEffect } from "react";
import Card from "../Card";
import { isNotEmpty } from "@/utils/arrays";

const List = ({ fetchData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((results) => {
        setData(results);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  const generateCards = () => {
    if (isNotEmpty(data)) {
      return data.map((item) => {
        return (
          <Card
            key={item.id}
            width={255}
            height={330}
            alt={item.title || item.name}
            name={item.title || item.name}
            description={item.description || item.variantDescription}
            series={item.series.name}
            type={item.type}
            modified={item.modified}
            thumbnailPathUrl={item.thumbnail?.path}
            thumbnailExtensionUrl={item.thumbnail?.extension}
          />
        );
      });
    };

    return (
      <div className="d-flex justify-content-center m-4">
        <div className="spinner-border" role="status" />
      </div>
    );
  };

  return (
    <div className="card flex-row flex-wrap align-self-md-stretch justify-content-center">
      {generateCards()}
    </div>
  );
};

export default List;
