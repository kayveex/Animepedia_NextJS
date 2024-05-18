/* eslint-disable react/jsx-key */
// Ini anggaplah saja index.html nya
import AnimeList from "@/components/AnimeList"; //Kalau index gausah dikasih detail
import HeaderAnimeList from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  return (
    <>
    {/* Anime Terpopuler */}
      <section>
        <HeaderAnimeList title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime}/>
      </section>
    </>
  );
}   
export default Page;