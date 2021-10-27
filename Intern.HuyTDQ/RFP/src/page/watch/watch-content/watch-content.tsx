import React, { useState, useEffect } from "react";
import API_Playlist from "../../../access/api/api-playlist";
import { Video, VideoMetadata, VideoInfoBox } from "../../../component/index";
import "./watch-content.scss";

function WatchContent(props: any) {
  const { video_id } = props;
  const [videoInformation, setVideoInformation] = useState([]);
  const [channelId, setChannelId] = useState('');

  //fetch video
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response: any = await API_Playlist.getPlaylistItem({ video_id });
        if (response) {
          setVideoInformation(response);
          setChannelId(response.snippet.channelId);
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
      <VideoMetadata className="metadata" video={videoInformation} />
      {/* <VideoInfoBox
        className="video-info-box"
        video={videoInformation}
        channelId={channelId}
      /> */}
    </div>
  );
}

export default WatchContent;
