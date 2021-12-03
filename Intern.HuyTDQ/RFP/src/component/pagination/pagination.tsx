import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import './pagination.scss';

export function Pagination(props: any) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, totalRow } = pagination;
  const totalPage: number = Math.ceil(totalRow / _limit) || 10;

  const pageArray = Array(totalPage)
    .fill(0)
    .map((_, index: any) => index + 1);

  function handlePageChange(newPage: number) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }

  function pageRender(pageIndex: number) {
    const currentPage: number = _page;
    const page: number = pageIndex;
    const distanceToCurrent = Math.abs(page - currentPage);

    if (currentPage !== page && distanceToCurrent > 1) {
      return (
        <li key={pageIndex} className='page truncated'>
          ...
        </li>
      );
    } else
      return (
        <li
          key={pageIndex}
          id={pageIndex.toString()}
          onClick={() => handlePageChange(pageIndex)}
          className={_page === pageIndex ? 'active' : undefined}
        >
          {pageIndex}
        </li>
      );
  }

  return (
    <>
      <ul className='pageNumber'>
        <li onClick={() => handlePageChange(_page - 1)} className={_page <= 1 ? 'disable-button' : undefined}>
          <AiOutlineDoubleLeft />
        </li>
        <li onClick={() => handlePageChange(_page - 3)} className={_page < 2 ? 'disable-button' : undefined}>
          <AiOutlineArrowLeft />
        </li>
        {pageArray.map((page: number) => pageRender(page))}
        <li onClick={() => handlePageChange(_page + 1)} className={_page === totalPage ? 'disable-button' : undefined}>
          <AiOutlineArrowRight />
        </li>
        <li onClick={() => handlePageChange(_page + 3)} className={_page > totalPage - 2 ? 'disable-button' : undefined}>
          <AiOutlineDoubleRight />
        </li>
      </ul>
    </>
  );
}
