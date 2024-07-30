import { Link } from "@remix-run/react";

export default function Navbar(){
    return (
        <nav className="navbar bg-base-100 flex justify-between items-center px-8">
            <h3 className="text-xl font-bold">
                Tourism Doc
            </h3>
            <ul className="flex gap-12">
                <li><Link to={"/"}>Home</Link></li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}