import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { requestData } from "@/services/request";
import Card from "@/components/Card";
import { useTabContext } from "@/context/TabContext";
import Layout from "@/components/Layout";

const IndividualItem = () => {
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useTabContext();;
  const [item, setItem] = useState(null);



  const handleTabIndex = (index) => {
    switch (index) {
      case 0:
        return "characters"
        break;
      case 1:
        return "comics";
        break;
      case 2:
        return "stories";
        break;
      default:
        console.log("Índice no reconocido");
    }
  };




  useEffect(() => {
    const fetchItem = async () => {
      try {
        const { data } = await requestData(`/${handleTabIndex(activeTab)}/${id}`);

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
