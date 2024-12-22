import { Card } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
  title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
}`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  // 56:25
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-5">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image
            src={urlFor(post.titleImage).url()}
            alt="카드 이미지"
            width={500}
            height={500}
            className="rounded-t-lg h-[200px] object-cover"
          />
        </Card>
      ))}
    </div>
  );
}
