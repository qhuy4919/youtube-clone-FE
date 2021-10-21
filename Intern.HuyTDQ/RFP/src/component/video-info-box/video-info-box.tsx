import React, { useState, useEffect } from "react";
import { Image, Button, Divider } from "semantic-ui-react";
import API_channel from "../../access/api/api-channel";

import "./video-info-box.scss";

function VideoInfoBox(props: any) {
  const { video } = props;
  console.log(video);
  //   const channelId = video.snippet.channelId;
  const [channel, setChannel] = useState({});

  //fetch channel
  //   useEffect(() => {
  //     const fetchVideo = async () => {
  //       try {
  //         const response: any = await API_channel.getChannel({ channelId });
  //         if (response) {
  //           setChannel(response.items[0]);
  //         }
  //       } catch (error) {
  //         throw new Error("fetch video was fail");
  //       }
  //     };
  //     fetchVideo();
  //   }, [channelId]);

  if (!video) {
    return <div />;
  }
  console.log(channel);
  const channelThumbnail: any = video.snippet.thumbnails.medium.url;
  const channelTitle: any = video.snippet.title;
  return (
    <div>
      <div className="video-info-box">
        <Image className="channel-image" src={channelThumbnail} circular />
        <div className="video-info">
          <div className="channel-name">{channelTitle}</div>
          {/* <div className="video-publication-date">{publishedAtString}</div> */}
        </div>
        <Button className="subscribe" color="youtube">
          Subcribe
        </Button>
        {/* <div className="video-description">
          <div className={descriptionTextClass}>{descriptionParagraphs}</div>
          <Button compact onClick={this.onToggleCollapseButtonClick}>
            {buttonTitle}
          </Button>
        </div> */}
      </div>
      <Divider />
    </div>
  );
}

export default VideoInfoBox;
