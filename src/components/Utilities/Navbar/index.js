import Link from "next/link";


const Navbar = () => {
    return (
        <header className="bg-blue-500">
            <nav className="flex md:flex-row flex-col justify-between p-4 gap-2">
                <Link href="/" className="font-bold text-white text-2xl">Animepedia</Link>
                <input  placeholder="Cari anime.." className="" />
            </nav>
        </header>
    )
}
export default Navbar;