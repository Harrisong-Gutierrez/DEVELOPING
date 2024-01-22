import axios from "axios";
import md5 from "md5";

export const requestData = async (endpointURL, queryParams) => {
  try {
    const response = await axios({
      baseURL: process.env.NEXT_PUBLIC_URL,
      method: "get",
      url: endpointURL,
      params: {
        ts: process.env.NEXT_PUBLIC_TIME,
        apikey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        hash: md5(
          process.env.NEXT_PUBLIC_TIME +
            process.env.NEXT_PUBLIC_PRIVATE_KEY +
            process.env.NEXT_PUBLIC_PUBLIC_KEY
        ),
        ...queryParams,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
