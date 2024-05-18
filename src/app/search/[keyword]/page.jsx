import { getAnimeResponse } from "@/app/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import HeaderAnimeList from "@/components/AnimeList/Header";

export default async function  Page({params : {keyword}}) {
    // Lakukan Decode pada keyword, agar enak dilihat dari sisi user
    const decodedKeyword = decodeURI(keyword);
    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);
    return(
        <>
            <HeaderAnimeList title={`Pencarian untuk ${decodedKeyword}`} />
            <section>
                <AnimeList api={searchAnime}/>
            </section>
        </>
    );
}