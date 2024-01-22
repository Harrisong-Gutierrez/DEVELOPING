import { requestData } from "../request";

const getCharacterData = async (page) => {
  const queryParams = {
    limit: 20,
    offset: page,
  };

  try {
    const { data } = await requestData("/characters", queryParams);
    return data.data.results;
  } catch (error) {
    return error;
  }
};

export default getCharacterData;
