function Pagination({ currentPage, totalPages, onPageChange }) {
    const isMobile = useIsMobile();
    const [maxPagesToShow, setMaxPagesToShow] = React.useState(8);

    React.useEffect(() => {
        if (isMobile) {
            setMaxPagesToShow(1);
        } else {
            setMaxPagesToShow(8);
        }
    }, [isMobile]);

    const pages = [];
    for (let i = currentPage; i <= currentPage + maxPagesToShow; i++) {
        if (i > totalPages) break;
        if (i == 1 || i == totalPages) continue;
        pages.push(i);
    }

    const liEl = (page) => (
        <li key={page}>
            <button
                onClick={() => onPageChange(page)}
                className={`px-3 py-2 border ${page === currentPage ? 'bg-green-700 border-green-700 text-white' : 'bg-white text-green-700 hover:bg-gray-100'}`}
                aria-current={page === currentPage ? 'page' : undefined}
            >
                {page}
            </button>
        </li>
    );

    const prevEl = (
        <li>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                className={`px-3 py-2 border border-gray-700 text-gray-400 hover:bg-gray-100`}
                disabled={currentPage === 1}
            >
                &lt;
            </button>
        </li>
    );

    const nextEl = (
        <li>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                className={`px-3 py-2 border border-gray-700 text-gray-400 hover:bg-gray-100`}
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
        </li>
    );

    const ellipsisEl = (
        <li>
            <div className="px-3 py-2 border border-gray-700 text-gray-400">...</div>
        </li>
    );

    return (
        <nav aria-label="Pagination">
            <ul className="inline-flex -space-x-px">
                {currentPage > 1 && prevEl}
                {liEl(1)}
                {currentPage > 2 && ellipsisEl}
                {
                    pages.map(page => liEl(page))
                }
                {totalPages - currentPage > maxPagesToShow && ellipsisEl}
                {liEl(totalPages)}
                {currentPage < totalPages && nextEl}
            </ul>
        </nav>
    );
}