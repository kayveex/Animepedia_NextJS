import Link from "next/link";

const HeaderAnimeList = ({title, linkHref, linkTitle}) => {
    return(
        <div className="flex justify-between p-4 items-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            {linkHref && linkTitle ?
                <Link href={linkHref} className="md:text-xl text-md underline hover:text-blue-500 transition-all">{linkTitle}</Link> 
                : null  
            }
        </div>
    )
}
export default HeaderAnimeList;