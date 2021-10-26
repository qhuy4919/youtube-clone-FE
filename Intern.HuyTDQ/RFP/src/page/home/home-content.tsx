import React, { useState, useEffect } from "react";
import { VideoGrid } from "../../component/video-grid/video-grid";
// import { Slider } from "../../component/index";
import { Carousel, Loader, Pagination } from "../../component/index";
import API_list from "../../access/api/api-playlist";

import "./home-content.scss";
function HomeContent() {
  const [video, setVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 3,
    totalRow: 12,
  });
  const [filter, setFilter] = useState({
    _limit: 3,
    _page: 1,
  });

  function handlePageChange(newPage: number) {
    setFilter({
      ...filter,
      _page: newPage
    })
    console.log(newPage);
  }

  useEffect(() => {
    let relevant = true
    const fetchVideo = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const response: any = await API_list.getPlaylist(filter);
        if (response && relevant) {
          setVideo(response);
          setPagination(prev => ({
            ...prev,
            ...filter
          }))
          setHasError(false);
        }
      } catch (error) {
        if (relevant)
          setHasError(true);
      } finally {
        if (relevant) {
          setIsLoading(false);
        }
      }
      return function cleanup() {
        relevant = false;
      }
    };
    fetchVideo();
  }, [filter]);
  return (
    <div className="home-content">
      {isLoading ? (
        <>
          <div className="loader">
            <Loader />
          </div>
        </>
      ) : (
        <>
          <div className="slider">
            {/* <Slider title="trending" videos={video} /> */}
            {/* <Carousel slide={video}></Carousel> */}
          </div>
          <div className="home-content__item">
            <VideoGrid title="recommend" videos={video} />
          </div>
          <div className="pagination-container">
            {
              <Pagination pagination={pagination} onPageChange={handlePageChange} />
            }
          </div>
        </>
      )}
    </div>
  );
}

export default HomeContent;
