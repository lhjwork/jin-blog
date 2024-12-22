import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion: "v2022-03-07",
  dataset: "production",
  projectId: "phik0bc2",
  useCdn: false, // 로컬 서버에서 최신 데이터를 가져오기 위해 false로 설정
});

const builer = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builer.image(source);
}
