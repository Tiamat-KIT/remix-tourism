import { Link } from "@remix-run/react";
import { Article } from "~/newt/client.server";

export default function Card({data}: {data: Article}){
  return (
    <Link to={`article/${data._id}`} className="card w-96 bg-base-100 shadow-xl image-full">
      <figure><img src={data.img.src} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
      </div>
  </Link>
  )
}