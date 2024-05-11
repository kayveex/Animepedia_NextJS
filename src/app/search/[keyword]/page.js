import AnimeList from "@/components/AnimeList";
import HeaderAnimeList from "@/components/AnimeList/Header";

export default async function  Page({params}) {
    // const keyword = params.keyword;
    const {keyword} = params;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
    const searchAnime = await response.json();
    return(
        <>
            {/* <h1 className="p-4 text-2xl font-bold">Pencarian Untuk {params.keyword}...</h1> */}
            <HeaderAnimeList title={`Pencarian untuk ${keyword}`} />
            <section>
                <AnimeList api={searchAnime}/>
            </section>
        </>
    );
}