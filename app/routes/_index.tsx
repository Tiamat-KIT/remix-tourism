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
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

  /* function InitialComponent(){
    return (
      <>
        <h1>Welcome to Remix</h1>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </>
    )
  } */

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
