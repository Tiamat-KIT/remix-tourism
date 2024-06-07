import { createEnv } from "@t3-oss/env-core";
import * as z from "zod"

export const env = createEnv({
    clientPrefix: "NEWT_",
    runtimeEnv: import.meta.env,
    client: {
        NEWT_SPACE_UID: z.string(),
        NEWT_CDN_API_TOKEN: z.string(),
        NEWT_APP_UID: z.string(),
        NEWT_MODEL_UID: z.string(),
    }
})