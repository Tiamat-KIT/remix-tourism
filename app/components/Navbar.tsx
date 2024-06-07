export default function Navbar(){
    return (
        <nav className="navbar bg-base-100 flex justify-between items-center px-8">
            <h3 className="text-xl font-bold">
                Tourism Doc
            </h3>
            <ul className="flex gap-12">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}