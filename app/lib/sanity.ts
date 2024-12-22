import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion: "2022-03-07",
  dataset: "production",
  projectId: "phik0bc2",
  useCdn: false,
});

const builer = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builer.image(source);
}
