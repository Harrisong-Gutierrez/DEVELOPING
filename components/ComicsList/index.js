import List from "../List";
import getComicsData from "@/services/comics";

const ComicsList = () => {
  return <List fetchData={getComicsData} />;
};

export default ComicsList;
