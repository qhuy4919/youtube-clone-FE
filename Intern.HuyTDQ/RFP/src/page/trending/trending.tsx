import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as VideoAction from '../../state/action/video';
import { getMostPopularVideo } from '../../state/reducer/video';
import {
  Header,
  Sidebar,
  VideoList,
  Loader,
  Pagination,
} from '../../component/index';
import './trending.scss';

export function Trending() {
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 8,
    totalRow: 46,
  });
  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 8,
  });
  const videoList = useSelector(getMostPopularVideo);
  const dispatch = useDispatch();
  const paginated = [1];
  useEffect(() => {
    dispatch(VideoAction.mostPopular.request(filter));
    setPagination({
      ...pagination,
      _page: filter._page,
    });
  }, [filter]);

  function handlePageChange(newPage: number) {
    setFilter({
      ...filter,
      _page: newPage,
    });
  }
  return (
    <div className='trending-container'>
      <Header />
      <Sidebar />
      <div className='trending-content'>
        {!videoList || videoList.length < 2 ? (
          <div className='loader'>
            <Loader />
          </div>
        ) : (
          <div className='video-list-container'>
            <VideoList video={videoList} />
          </div>
        )}
        <div className='pagination-container'>
          <Pagination pagination={pagination} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
}
