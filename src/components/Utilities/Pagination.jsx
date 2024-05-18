
const Pagination = ({ page, lastPage, setPage }) => {

    // Scroll to top when changing page
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
    const HandleNextPage = () => {
        setPage((prevState) => prevState + 1);
        scrollTop();
    }
    const HandlePrevPage = () => {
        if (page <= 1) return;
        setPage((prevState) => prevState - 1);
        scrollTop();
    }

    return (
        <>
            <div className="flex text-2xl text-primary justify-center items-center py-4 px-2 gap-4">
                {page <= 1 ? null : <button onClick={HandlePrevPage} className="transition-all hover:text-accent">Prev</button>}
                <p>{page} of {lastPage}</p>
                {page >= lastPage ? null : <button onClick={HandleNextPage} className="transition-all hover:text-accent">Next</button>}
            </div>
        </>
    );
}
export default Pagination;