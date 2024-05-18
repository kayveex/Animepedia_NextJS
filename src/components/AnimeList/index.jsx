/* eslint-disable react/jsx-key */
import Image from "next/image";
import Link from "next/link";

export default function AnimeList({api}) {
    return (
        <>
            <section className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
                {/* Kasih ? = kalau ada data adakan mapping, jika tidak yodah gausah */}
                {api.data?.map((anime, index) => {
                    return (
                        <Link key={index} href={`/anime/${anime.mal_id}`} className="cursor-pointer text-primary hover:text-accent transition-all">
                            <Image className="w-full max-h-64 object-cover " width={350} height={350} src={anime.images.webp.image_url} alt="..."/>
                            <h3 className="p-4 font-bold md:text-xl text-md text-center">{anime.title}</h3>
                        </Link>
                    )
                })};
            </section>
        </>
    );
}