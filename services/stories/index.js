import { requestData } from "../request";

const getStoriesData = async (page) => {
  const queryParams = {
    limit: 20,
    offset: page,
  };

  try {
    const { data } = await requestData("/stories", queryParams);
    return data.data.results;
  } catch (error) {
    return error;
  }
};

export default getStoriesData;
