import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import './pagination.scss';

export function Pagination(props: any) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, totalRow } = pagination;
  const totalPage = Math.ceil(totalRow / _limit) || 10;
  var pageNumber: any = [];
  var leftSide = _page - 2;
  if (leftSide <= 0) leftSide = 1;
  var rightSide = _page + 2;
  if (rightSide > totalPage) rightSide = totalPage;

  for (let number = leftSide; number <= rightSide; number++) {
    pageNumber.push(
      <li
        key={number}
        id={number.toString()}
        onClick={() => handlePageChange(number)}
        className={_page === number ? 'active' : undefined}
      >
        {number}
      </li>
    );
  }

  function handlePageChange(newPage: number) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }

  return (
    <>
      <ul className='pageNumbers'>
        <li onClick={() => handlePageChange(_page - 1)} className={_page <= 1 ? 'disable-button' : undefined}>
          <AiOutlineArrowLeft />
        </li>
        {pageNumber}
        <li onClick={() => handlePageChange(_page + 1)} className={_page === totalPage ? 'disable-button' : undefined}>
          <AiOutlineArrowRight />
        </li>
      </ul>
    </>
  );
}
