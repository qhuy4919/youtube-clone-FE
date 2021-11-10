import { useState, useEffect } from 'react';
import { VideoGrid } from '../../component/video-grid/video-grid';
import { Loader, Pagination } from '../../component/';
import { Query } from '../../access/api/index';
import './home-content.scss';

function HomeContent() {
  const [videoList, setVideoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 8,
    totalRow: 46,
  });
  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 8,
  });

  function handlePageChange(newPage: number) {
    setFilter({
      ...filter,
      _page: newPage,
    });
  }

  useEffect(() => {
    let relevant = true;
    const fetchVideo = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const response: any = await Query.video.list(filter);
        if (response && relevant) {
          setVideoList(response.data);
          setPagination((prev) => ({
            ...prev,
            _page: filter._page,
            totalRow: response.headers['x-total-count'],
          }));
          setHasError(false);
        }
      } catch (error) {
        if (relevant) setHasError(true);
      } finally {
        if (relevant) {
          setIsLoading(false);
        }
      }
    };
    fetchVideo();
    return () => {
      relevant = false;
    };
  }, [filter]);

  return (
    <div className='home-content'>
      {isLoading ? (
        <div className='loader-container'>
          <div className='loader'>
            <Loader />
          </div>
        </div>
      ) : (
        <>
          {/* <div className='slider'>
            <Slider title="trending" videos={video} />
            <Carousel slide={video}></Carousel>
          </div> */}
          <div className='home-content__item'>
            <VideoGrid title='recommend' videos={videoList} />
          </div>
        </>
      )}
      {hasError && <> no data...</>}
      <div className='pagination-container'>
        <Pagination pagination={pagination} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}

export default HomeContent;
