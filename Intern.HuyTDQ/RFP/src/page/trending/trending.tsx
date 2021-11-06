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

type VideoData = {
  data: [];
  totalPage: number;
};
export function Trending() {
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 8,
    totalRow: 12,
  });
  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 8,
  });
  const videoList: VideoData = useSelector(getMostPopularVideo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(VideoAction.mostPopular.request(filter));
    setPagination({
      ...pagination,
      _page: filter._page,
      totalRow: videoList.totalPage,
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
        {!videoList || videoList.data.length < 2 ? (
          <div className='loader'>
            <Loader />
          </div>
        ) : (
          <div className='video-list-container'>
            <VideoList video={videoList.data} />
          </div>
        )}
        <div className='pagination-container'>
          <Pagination pagination={pagination} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
}
