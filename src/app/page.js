/* eslint-disable react/jsx-key */
// Ini anggaplah saja index.html nya
import AnimeList from "@/components/AnimeList"; //Kalau index gausah dikasih detail
import Link from "next/link";


// export default async function Home() {

//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/top/anime`)
//   return (
//     <>
//       <h1>Animepedia 🙌</h1>
//       <AnimeList />
//     </>
//   );
// }

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()
  return (
    <>
    <div className="flex justify-between p-4 items-center">
      <h1 className="text-2xl font-bold">Sipaling Populer 🙌</h1>
      <Link href="/populer" className="md:text-xl text-md underline hover:text-blue-500 transition-all">Lihat Semua</Link>
    </div>
      <section className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {topAnime.data.map(data => {
          return (
            <div className="shadow-xl" key={data.mal_id}>
              <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
            </div>
          )
        })};
      </section>
    </>
  );
}   
export default Home;