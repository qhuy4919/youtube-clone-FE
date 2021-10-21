import React, { useState, useEffect } from "react";
import VideoGrid from "../../component/video-grid/video-grid";

import API_list from "../../access/api/API_playlist";
import "./home-content.scss";
function HomeContent() {
  const [video, setVideo] = useState();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response: any = await API_list.getPlaylist();
        if (response) {
          setVideo(response.items);
          console.log(response);
        }
      } catch (error) {
        throw new Error("fetch video was fail");
      }
    };
    fetchVideo();
  }, []);
  return (
    <div className="home-content">
      <VideoGrid videos={video} />
    </div>
  );
}

export default HomeContent;
