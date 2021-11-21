import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Header,
  Sidebar,
  VideoList,
  Loader,
  Pagination,
  TrendingAddForm,
} from '../../component/index';
import { Icon } from 'semantic-ui-react';
import * as videoAction from '../../state/action/video';
import {
  getMostPopularVideo,
  getLoading,
  getError,
} from '../../state/reducer/video';
import './trending.scss';
import { ToastContainer, toast } from 'react-toastify';

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
  const isLoading: boolean = useSelector(getLoading);
  const hasError: any = useSelector(getError);
  const dispatch = useDispatch();

  //
  useEffect(() => {
    dispatch(videoAction.mostPopular.request(filter));
    if (videoList.data.length > 0) {
      setPagination({
        ...pagination,
        _page: filter._page,
        totalRow: videoList.totalPage,
      });
    } else if (hasError) {
      console.log(hasError);
      toast.error(hasError);
    }
  }, [filter._page, JSON.stringify(videoList), hasError]);

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
        <div className='trending-content__list'>
          {isLoading ? (
            <div className='loader'>
              <Loader />
            </div>
          ) : (
            <div className='video-list-container'>
              <VideoList video={videoList.data} />
            </div>
          )}
        </div>
        <div className='modal position-fixed add-button'>
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
      <ToastContainer />
      <TrendingAddForm
        isShowing={isShowing}
        hide={toggleForm}
        closeModal={closeModal}
      />
    </div>
  );
}
