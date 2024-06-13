/* eslint-disable @next/next/no-img-element */
import { db } from "../server/db/index";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/4652a8a4-c411-4408-a726-9e1101f663c3-fxmm2v.jpg",
  "https://utfs.io/f/09864d97-81bb-4b93-a3f0-928ef730eb2c-idurez.jpg",
  "https://utfs.io/f/a8d385e2-69f3-4830-890c-e99611aa5abb-1u2y8y.jpg",
  "https://utfs.io/f/ff783c5e-07a2-4fc9-870d-ea243cb39024-xu67tf.jpg",
  "https://utfs.io/f/3b5ddec3-c132-4519-961e-74ba721a6b04-lf9k1d.jpg",
  "https://utfs.io/f/8e4cbee4-6702-49e2-886b-41237a0e16e0-2qrlny.jpg"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log("posts:", posts);

  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-4">
        {posts.map(post => (
          <div key={post.id}>{post.name}</div>
        ))}

        {[...mockImages, ...mockImages, ...mockImages].map(({ url, id }, index) => (
          <div key={id + "-" + index} className="w-48">
            <img src={url} alt="stock image" />
          </div>
        ))}
      </div>
    </main>
  );
}
