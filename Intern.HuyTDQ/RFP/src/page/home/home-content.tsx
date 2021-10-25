import React, { useState, useEffect } from "react";
import { VideoGrid } from "../../component/video-grid/video-grid";
// import { Slider } from "../../component/index";
import { Carousel, Loader } from "../../component/index";
import API_list from "../../access/api/api-playlist";

import "./home-content.scss";
function HomeContent() {
  const [video, setVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const response: any = await API_list.getPlaylist();
        if (response) {
          setVideo(response.items);
        }
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    setTimeout(() => fetchVideo(), 1000);
  }, []);
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
            <Carousel slide={video}></Carousel>
          </div>
          <div className="home-content__item">
            <VideoGrid title="recommend" videos={video} />
          </div>
        </>
      )}
    </div>
  );
}

export default HomeContent;
