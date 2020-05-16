import { end_url, api_key } from "../config/config";

export default async function getCredits(dataType, id) {
  let endPoint = `${end_url}${dataType}/${id}/credits?api_key=${api_key}&language=en-US&page=1`;
  const res = await fetch(endPoint);
  return await res.json();
}
