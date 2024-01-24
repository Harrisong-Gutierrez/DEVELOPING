import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { requestData } from "@/services/request";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import { useGlobalState } from "@/context/ListStateContext";

const IndividualItem = () => {
  const router = useRouter();
  const { id } = router.query;
  const { storyActivo, setStoryActivo, characterActivo, setCharacterActivo, comicActivo, setComicActivo } = useGlobalState();
  const [item, setItem] = useState(null);

  console.log(storyActivo,characterActivo,comicActivo)



  // const handleActiveList = (characterActivo, comicActivo, storyActivo) => {
  //   if (characterActivo === 0) {
  //     return "characters";
  //   } else if (comicActivo === 1) {
  //     return "comics";
  //   } else if (storyActivo === 2) {
  //     return "stories";
  //   } else {
  //     console.log("No active tab found");
  //   }
  // };

  const handleActiveList = (characterActivo, comicActivo, storyActivo) => {
    if (characterActivo === 0) {
      return "characters";
    } else if (comicActivo === 1) {
      return "comics";
    } else if (storyActivo === 2) {
      return "stories";
    } else {
      console.log("No active tab found");
    }
  };
  

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const { data } = await requestData(`/${handleActiveList(characterActivo, comicActivo, storyActivo)}/${id}`);

        setItem(data.data.results[0]);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchItem();
    }
  }, [id]);

  return (
   <Layout>
     <div className="d-flex justify-content-center">
      {item ? (
        <Card
          id={item.id}
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
      ) : (
        <div className="d-flex justify-content-center m-4">
          <div className="spinner-border" role="status" />
        </div>
      )}
    </div>
   </Layout>
  );
};

export default IndividualItem;
