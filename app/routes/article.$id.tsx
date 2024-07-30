import { HeadersFunction, json,LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { env } from "~/env";
import { client, Article } from "~/newt/client.server";

export const headers: HeadersFunction = ({ loaderHeaders }) => {
    const cacheControl =
        loaderHeaders.get('Cache-Control') ??
        'max-age=0, s-maxage=60, stale-while-revalidate=60';
    return {
        'cache-control': cacheControl,
    };
};


export async function loader(props: LoaderFunctionArgs){
    const {id} = props.params
    console.log(id)
    if(typeof id !== 'string') throw new Error('Invalid ID')
    const article = await client.getFirstContent<Article>({
        appUid: env.NEWT_APP_UID,
        modelUid: env.NEWT_MODEL_UID,
        query: {
            _id: id,
            select: ['_id', 'title', 'body'],
        }
    })
    return json(article)    
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
            <article className="prose [&>*]:text-secondary-content [&_strong]:text-primary-content [&_a]:text-accent" dangerouslySetInnerHTML={{
                __html: data.body
            }}>
    
            </article>
        </main>
    )
}