import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useLayoutEffect,useRef } from "react";
import { Article, getArticleBySlug } from "~/newt/client.server";

export async function loader(props: LoaderFunctionArgs){
    const {id} = props.params
    if(typeof id !== 'string') throw new Error('Invalid ID')
    return json(await getArticleBySlug(id))    
}

export default function ArticlePage(){
    const ArticleRef = useRef<Article | null>()
    
    useLayoutEffect( () => {
        ArticleRef.current = useLoaderData<typeof loader>()
        if(ArticleRef.current === null) {
            throw new Error()
        }
        else {
            (document.getElementById("article") as HTMLElement).appendChild(
                document.createRange().createContextualFragment(ArticleRef.current.body)
            )
        }
    },[])
    
    return (
        <main className="w-full bg-slate-200/80 text-base-100 p-5">
            <h2 className="text-secondary-content text-xl font-bold">{ArticleRef.current?.title}</h2>
            <article id="article" className="prose text-secondary-content">
                
            </article>
        </main>
    )
}