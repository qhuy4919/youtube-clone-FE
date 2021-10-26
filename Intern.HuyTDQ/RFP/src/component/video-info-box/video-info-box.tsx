import React, { useState, useEffect } from "react";
import { Image, Button, Divider } from "semantic-ui-react";
import API_channel from "../../access/api/api-channel";

import "./video-info-box.scss";

export function VideoInfoBox(props: any) {
  const { video, channelId } = props;
  const [channel, setChannel] = useState<any>([]);
  const [check, setCheck] = useState(false);

  //fecth channel information
  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const response: any = await API_channel.getChannel({ channelId });
        console.log(response);
        if (response) {
          setChannel(response.items[0]);

        }
      } catch (error) {
        console.log("fetch channel fail");
      } finally {
        setCheck(true);
      }
    };
    fetchChannel();

    return () => {
      setCheck(false);
    };
  }, [channelId]);

  if (!video) {
    return <div />;
  }
  // let channelThumbnail: any = "";

  // var channelThumbnail = channel.snippet.thumbnails.medium.url ?? "";
  // var channelTitle = channel.snippet.title ?? "";
  return (
    <div>
      {check && (
        <>
          <div className="video-info-box">
            <Image
              className="channel-image"
              src={channel.snippet.thumbnails.medium.url}
              circular
            />
            <div className="video-info">
              <div className="channel-name">{channel.snippet.title}</div>
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
        </>
      )}
    </div>
  );
}
