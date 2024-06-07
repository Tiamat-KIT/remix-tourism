import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import parse from "html-react-parser"
import { getArticleBySlug } from "~/newt/client.server";

export async function loader(props: LoaderFunctionArgs){
    const {id} = props.params
    if(typeof id !== 'string') throw new Error('Invalid ID')
    return json(await getArticleBySlug(id))    
}

export default function ArticlePage(){
    const data = useLoaderData<typeof loader>()
    if(data === null){
        return (
            <p>Loading...</p>
        )
    }
    return (
        <main className="w-full bg-slate-200/80 text-base-100 p-5">
            <h2 className="text-secondary-content text-xl font-bold">{data.title}</h2>
            <article className="prose text-secondary-content">
                {parse(data.body)}
            </article>
        </main>
    )
}