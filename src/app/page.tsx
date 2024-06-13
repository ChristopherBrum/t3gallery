/* eslint-disable @next/next/no-img-element */
import { db } from "../server/db/index";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  console.log("images:", images);

  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-4">
        {[...images, ...images, ...images].map(({ url, name, id }, index) => (
          <div key={id + "-" + index} className="flex w-48 flex-col">
            <img src={url} alt="stock image" />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
