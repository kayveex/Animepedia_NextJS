import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionBtn from "./UserActionBtn";


const Navbar = () => {
    return (
        <header className="bg-accent">
            <nav className="flex md:flex-row flex-col justify-between p-4 gap-2 md:items-center">
                <Link href="/" className="font-bold text-2xl">Animepedia 📖</Link>
                <InputSearch />
                <UserActionBtn />
            </nav>
        </header>
    )
}
export default Navbar;