import { getAnimeResponse } from "@/app/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const Page = async({params: {id}}) => {
    const animeDetail = await getAnimeResponse(`anime/${id}`)
    // console.log(animeDetail);
    return (
        <>
        <div className="pt-4 px-4">
            <h1 className="text-3xl font-bold text-primary">{animeDetail.data.title} - {animeDetail.data.year}</h1>
        </div>
        <div className="pt-4 px-4 flex gap-2 text-primary overflow-x-auto">
            <div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-primary">
                <p className="text-xl font-bold">{animeDetail.data.rank}</p>
                <p className="text-md">Peringkat</p>
            </div>
            <div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-primary">
                <p className="text-xl font-bold">{animeDetail.data.score}</p>
                <p className="text-md">Skor</p>
            </div>
            <div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-primary">
                <p className="text-xl font-bold">{animeDetail.data.popularity}</p>
                <p className="text-md">Popularitas</p>
            </div>
            <div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-primary">
                <p className="text-xl font-bold">{animeDetail.data.season}</p>
                <p className="text-md">Musim</p>
            </div>
        </div>
        <div className="pt-4 px-4 flex flex-wrap sm:flex-nowrap gap-2 text-primary">
            <Image className="w-full rounded object-cover" width={300} height={300} src={animeDetail.data.images.webp.image_url} alt={animeDetail.data.images.jpg.image_url}/>
            <p className="text-justify text-xl">{animeDetail.data.synopsis}</p>
        </div>
        <div>
            <VideoPlayer youtubeId={animeDetail.data.trailer.youtube_id} />
        </div>

        </>
    );
}

export default Page;