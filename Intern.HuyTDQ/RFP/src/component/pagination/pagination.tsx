import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import './pagination.scss';

const createPageNumber = (totalPage: number) => {
  var pageNumber: number[] = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumber.push(i);
  }

  return pageNumber;
};
export function Pagination(props: any) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, totalRow } = pagination;

  const totalPage = Math.ceil(totalRow / _limit) || 10;
  var pageNumber = createPageNumber(totalPage);

  function handlePageChange(newPage: number) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }

  const renderPageNumbers = pageNumber.map((number, index) => {
    if (number > 0 && number <= totalPage) {
      return (
        <li
          key={index}
          id={number.toString()}
          onClick={() => handlePageChange(number)}
          className={_page === number ? 'active' : undefined}
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
      <ul className='pageNumbers'>
        <li
          onClick={() => handlePageChange(_page - 1)}
          className={_page <= 1 ? 'disable-button' : undefined}
        >
          <AiOutlineArrowLeft />
        </li>
        {renderPageNumbers}
        <li
          onClick={() => handlePageChange(_page + 1)}
          className={_page === totalPage ? 'disable-button' : undefined}
        >
          <AiOutlineArrowRight />
        </li>
      </ul>
      {/* <button onClick={handleLoadMore} className="loadmore">
                Load More
            </button> */}
    </>
  );
}
