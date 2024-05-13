/* eslint-disable react/jsx-key */
// Ini anggaplah saja index.html nya
import AnimeList from "@/components/AnimeList"; //Kalau index gausah dikasih detail
import HeaderAnimeList from "@/components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()
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