import React from "react";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";

import "./video-preview.scss";

function VideoPreview(props: any) {
  const { video, pathname, search } = props;

  const description = video.expanded ? video.snippet.description : null;
  return (
    <>
      <Link to={{ pathname: pathname, search: search }}>
        <div className="video-preview">
          <div className="image-container">
            <Image src={video.thumbnails.medium.url} />
            <div className="time-label">
              {/* <span>{videoDuration}</span> */}
            </div>
          </div>

          <div className="video-info">
            <div>{video.title}</div>
            <div className="video-preview-metadata-container">
              <div className="channel-title">{video.channelTitle}</div>
              {/* <div className="view-and-time">{viewAndTimeString}</div> */}
              <div className="show-max-two-lines">{description}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default VideoPreview;
