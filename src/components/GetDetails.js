import { end_url, api_key } from "../config/config";

const getDetails = async (dataType, id) => {
  let endPoint = `${end_url}${dataType}/${id}?api_key=${api_key}&language=en-US&page=1`;
  const res = await fetch(endPoint);
  return await res.json();
};

export default getDetails;
