import List from "../List";
import getStoriesData from "@/services/stories";

const StoriesList = () => {
  return <List fetchData={getStoriesData} />;
};

export default StoriesList;
