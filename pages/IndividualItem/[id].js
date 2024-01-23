import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { requestData } from "@/services/request";
import Card from "@/components/Card";

const IndividualItem = () => {
  const router = useRouter();
  const { id } = router.query;
  const { title } = router.query;
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const { data } = await requestData(`/characters/${id}`);

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
    <>
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
    </>
  );
};

export default IndividualItem;
