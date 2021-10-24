import React, { useState, useEffect } from "react";
import { VideoGrid } from "../../component/video-grid/video-grid";
import { Slider } from "../../component/index";
import { Carousel } from "../../component/index";
import API_list from "../../access/api/api-playlist";
import "./home-content.scss";
function HomeContent() {
  const [video, setVideo] = useState<[]>();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response: any = await API_list.getPlaylist();
        if (response) {
          setVideo(response.items);
        }
      } catch (error) {
        throw new Error("fetch video was fail");
      }
    };
    fetchVideo();
  }, []);
  return (
    <div className="home-content">
      <div className="slider">
        {/* <Slider title="trending" videos={video} /> */}
        <Carousel slide={video}></Carousel>
      </div>
      <div className="home-content__item">
        <VideoGrid title="recommend" videos={video} />
      </div>
    </div>
  );
}

export default HomeContent;
