/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import {React, useEffect, useState} from "react";


const Page = () => {
    const [page, setPage] = useState(1);
    const [topAnime, setTopAnime] = useState([]);

    const FetchData = async() => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
        );
        const data = await response.json();
        setTopAnime(data);
    }

    useEffect(() => {
        FetchData();
    }, [page]);


    return (
        <>
            <HeaderMenu title={`ANIME TERPOPULER #${page}`}/>
            <AnimeList api={topAnime}/>
            <Pagination page={page} 
            lastPage={topAnime.pagination?.last_visible_page} 
            setPage={setPage}/>
        </>
    );
}

export default Page;