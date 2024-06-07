import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import parse, { DOMNode, Element, domToReact } from "html-react-parser"
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
                {parse(data.body,{
                    replace(domNode, index) {
                        if(domNode instanceof Element && domNode.attributes){
                            if(domNode.tagName === "h3"){
                                return (
                                    <h3 /* {...domNode.attributes}  */className="text-secondary-content">
                                        {domToReact(domNode.childNodes as DOMNode[])}
                                    </h3>
                                )
                            }else if(domNode.tagName === "h2"){
                                return (
                                    <h2 /* {...domNode.attributes} */ className="text-secondary-content">
                                        {domToReact(domNode.childNodes as DOMNode[])}
                                    </h2>
                                )
                            }else if(domNode.tagName === "a"){
                                return (
                                    <div /* {...domNode.attributes} */ className="text-secondary-content">
                                        {domToReact(domNode.childNodes as DOMNode[])}
                                    </div>
                                )
                            }
                        }
                    },
                })}
            </article>
        </main>
    )
}