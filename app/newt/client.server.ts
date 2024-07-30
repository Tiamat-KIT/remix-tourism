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

export const client = createClient({
    spaceUid: env.NEWT_SPACE_UID,
    token: env.NEWT_CDN_API_TOKEN,
    apiType: "cdn"
});
