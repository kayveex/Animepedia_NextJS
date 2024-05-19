/* eslint-disable react/jsx-key */
// Ini anggaplah saja index.html nya
import AnimeList from "@/components/AnimeList"; //Kalau index gausah dikasih detail
import HeaderAnimeList from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduceAnimeList } from "../libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  // Pake Nested karena data API nya harus nge-loop dulu baru bisa dapet data asli
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  // Custom Random recommended Anime pake reproduce function
  recommendedAnime = reproduceAnimeList(recommendedAnime, 8);

  return (
    <>
    {/* Anime Terpopuler */}
      <section>
        <HeaderAnimeList title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime}/>
      </section>
      <section>
        <HeaderAnimeList title="Rekomendasi" />
        <AnimeList api={recommendedAnime}/>
      </section>
    </>
  );
}   
export default Page;