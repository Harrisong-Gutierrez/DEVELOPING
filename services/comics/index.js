import { requestData } from "../request";

const getComicsData = async (page) => {
  const queryParams = {
    limit: 20,
    offset: page,
  };

  try {
    const { data } = await requestData("/comics", queryParams);
    return data.data.results;
  } catch (error) {
    return error;
  }
};

export default getComicsData;
