import { Outlet } from "@remix-run/react";

export default function ArticleBase(){
    return (
        <div className="bg-[url('/jishu.jpg')] bg-cover w-screen">
            <Outlet />
        </div>
    )
}