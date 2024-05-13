"use client";
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";



const Page = () => {
    return (
        <>
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex items-center justify-center text-accent flex-col">
                <FileSearch size={32} />
                <h1 className=" font-bold text-2xl px-4 py-8">404 NOT FOUND!</h1>
                <Link href="/" className="text-primary hover:text-accent underline transition-all">Kembali</Link>
            </div>
        </div>

        </>
    );
}
export default Page;