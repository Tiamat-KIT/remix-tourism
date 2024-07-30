import { HeadersFunction, json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { env } from "~/env";
import { Article, client } from "~/newt/client.server";

export const headers: HeadersFunction = () => {
  return {
    'Cache-Control': 'max-age=0, s-maxage=60, stale-while-revalidate=60',
  };
};

export async function loader({response}: LoaderFunctionArgs){
  const {items} = await client.getContents<Article>({
      appUid: env.NEWT_APP_UID,
      modelUid: env.NEWT_MODEL_UID,
  })
  return json(items)
} 

export const meta: MetaFunction = () => {
  return [
    { title: "Tourism Doc" },
    { name: "description", content: "Tourismの新入生ドキュメント" },
  ];
};


export default function Index() {
  const data = useLoaderData<typeof loader>()
  return (
    <div className="bg-[url('/jishu.jpg')] bg-cover">
      <main className="grid grid-cols-2 gap-4 items-center justify-center backdrop-blur-sm p-5">
        {data.map((data,idx) => {

          return (
            <div key={idx}>
              <Link to={`article/${data._id}`}  className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={data.img.src} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{data.title}</h2>
                </div>
              </Link>
            </div>
          )
        })}
      </main>
    </div>
  );
}
