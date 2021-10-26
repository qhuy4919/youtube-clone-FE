import { useState } from 'react'

import './pagination.scss';

export function Pagination(props: any) {
    const { pagination, onPageChange } = props;
    const { _page, _limit, totalRow } = pagination;
    const [currentPage, setcurrentPage] = useState(1);

    const totalPage = Math.ceil(totalRow / _limit);
    var pageNumber = [];
    for (let i = 1; i <= totalPage; i++) {
        pageNumber.push(i);
    }

    function handlePageChange(newPage: number) {
        if (onPageChange) {
            onPageChange(newPage);
        }
    }

    const handleClick = (event: any) => {
        setcurrentPage(Number(event.target.id));
    };
    const renderPageNumbers = pageNumber.map((number, index) => {
        if (number > 0 && number <= totalPage) {
            return (
                <li
                    key={index}
                    id={number.toString()}
                    onClick={() => handlePageChange(number)}
                    className={currentPage == number ? "active" : undefined}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });

    return (
        <>
            <ul className="pageNumbers">
                <li>
                    <button
                        onClick={() => handlePageChange(_page - 1)}
                        disabled={_page == 1 ? true : false}
                    >
                        Prev
                    </button>
                </li>
                {renderPageNumbers}
                <li>
                    <button
                        onClick={() => handlePageChange(_page + 1)}
                        disabled={_page == totalPage ? true : false}
                    >
                        Next
                    </button>
                </li>
            </ul>
            {/* <button onClick={handleLoadMore} className="loadmore">
                Load More
            </button> */}
        </>
    )
}
