import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getArticles } from "~/newt/client.server";
import { $path } from "remix-routes";
import parse from "html-react-parser"
import useInnerSize from "~/hooks/useInnerSize";
import Card from "~/components/Card";

export async function loader(props: LoaderFunctionArgs){
  const articles = await getArticles()
  return json(articles)
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
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
    className="bg-[url('/jishu.jpg')] bg-cover ">
      <main className="w-screen h-max grid grid-cols-2 gap-4 items-center justify-center backdrop-blur-sm p-5">
        {data.map((data,idx) => {
          return (
            <Card data={data} key={idx} />
          )
        })}
      </main>
    </div>
  );
}
