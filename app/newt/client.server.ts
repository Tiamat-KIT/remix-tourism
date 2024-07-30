import { createClient } from "newt-client-js";
import { env } from "~/env";
import type {Content,Image} from "newt-client-js"

export interface Article extends Content {
    title: string,
    body: string,
    img: Image,
    allow: {
        allow: string
    }
}

const client = createClient({
    spaceUid: env.NEWT_SPACE_UID,
    token: env.NEWT_CDN_API_TOKEN,
    apiType: "cdn"
});

export async function getArticles(){
    const {items} = await client.getContents<Article>({
        appUid: env.NEWT_APP_UID,
        modelUid: env.NEWT_MODEL_UID,
        query: {
            limit: 100
        }
    })
    return items
}

export async function getArticleBySlug(slug: string){
    const article = await client.getFirstContent<Article>({
        appUid: env.NEWT_APP_UID,
        modelUid: env.NEWT_MODEL_UID,
        query: {
            slug
        }
    })
    return article
}
