import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as videoAction from '../../state/action/video';
import { getMostPopularVideo } from '../../state/reducer/video';
import {
  Header,
  Sidebar,
  VideoList,
  Loader,
  Pagination,
  TrendingAddForm,
} from '../../component/index';
import { Icon } from 'semantic-ui-react';
import './trending.scss';

type VideoData = {
  data: [];
  totalPage: number;
};

export function Trending() {
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 8,
    totalRow: 50,
  });
  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 8,
  });
  const [isShowing, setIsShowing] = useState(false);
  const videoList: VideoData = useSelector(getMostPopularVideo);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const dispatch = useDispatch();
  
  useEffect(() => {
    try {
      dispatch(videoAction.mostPopular.request(filter));
      setPagination({
        ...pagination,
        _page: filter._page,
        totalRow: videoList.totalPage,
      });
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [filter]);

  function handlePageChange(newPage: number) {
    setFilter({
      ...filter,
      _page: newPage,
    });
  }

  function toggleForm() {
    setIsShowing(!isShowing);
  }

  function closeModal() {
    setIsShowing(false);
  }
  return (
    <div className='trending-container'>
      <Header />
      <Sidebar />

      <div className='trending-content'>
        {!videoList && isLoading ? (
          <div className='loader'>
            <Loader />
          </div>
        ) : (
          <div className='video-list-container'>
            <VideoList video={videoList.data} />
          </div>
        )}
        <div className='position-fixed add-button'>
          <Icon
            name='add'
            size='large'
            className=' add-button__icon'
            onClick={toggleForm}
          ></Icon>
        </div>
        <div className='pagination-container'>
          <Pagination pagination={pagination} onPageChange={handlePageChange} />
        </div>
      </div>
      {hasError && <> no data...</>}
      <TrendingAddForm
        isShowing={isShowing}
        hide={toggleForm}
        closeModal={closeModal}
      />
    </div>
  );
}
