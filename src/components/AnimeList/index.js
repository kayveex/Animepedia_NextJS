import Image from "next/image";
import Link from "next/link";

export default function AnimeList({ title, images, id}) {
    return (
        <>
            <Link href={`/${id}`} className="cursor-pointer">
                <Image className="w-full max-h-64 object-cover " width={350} height={350} src={images} alt="..."/>
                <h3 className="p-4 font-bold md:text-xl text-md text-center">{title}</h3>
            </Link>
        </>
    );
}