import React, { useState, useEffect } from "react";
import Video from "../../../component/video/video";
import API_Playlist from "../../../access/api/api-playlist";
import VideoMetadata from "../../../component/video-metadata/video-metadata";
import VideoInfoBox from "../../../component/video-info-box/video-info-box";
import "./watch-content.scss";
function WatchContent(props: any) {
  const { video_id } = props;

  const [videoInformation, setVideoInformation] = useState([]);

  //fetch video
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response: any = await API_Playlist.getPlaylistItem({ video_id });
        if (response) {
          setVideoInformation(response.items);
        }
      } catch (error) {
        throw new Error("fetch video was fail");
      }
    };
    fetchVideo();
  }, [video_id]);

  return (
    <div className="watch-grid">
      <Video className="video" id={video_id} />
      <VideoMetadata className="metadata" video={videoInformation[0]} />
      <VideoInfoBox className="video-info-box" video={videoInformation[0]} />
    </div>
  );
}

export default WatchContent;
