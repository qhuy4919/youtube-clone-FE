import React, { useState, useEffect } from 'react';
import { Image, Button, Divider } from 'semantic-ui-react';
import API_channel from '../../access/api/api-channel';

import './video-info-box.scss';

export function VideoInfoBox(props: any) {
  const { video, channelId } = props;
  console.log(channelId);
  const [channel, setChannel] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState<any | undefined>();
  //fecth channel information
  useEffect(() => {
    let relevant = true;
    const fetchChannel = async () => {
      try {
        setIsLoading(true);
        const response: any = await API_channel.getChannel({ channelId });
        if (response && relevant) {
          console.log(response.items[0]);
          setChannel(response.items[0]);
          setIsLoading(false);
        }
      } catch (error) {
        setHasError(error);
      } finally {
        if (relevant) {
          setIsLoading(false);
        }
      }
    };
    fetchChannel();

    return () => {
      relevant = false;
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
      {!isLoading && (
        <>
          {console.log(channel)}
          <div className='video-info-box'>
            <Image
              className='channel-image'
              src={channel.snippet.thumbnails.medium.url}
              circular
            />
            <div className='video-info'>
              <div className='channel-name'>{channel.snippet.title}</div>
              {/* <div className="video-publication-date">{publishedAtString}</div> */}
            </div>
            <Button className='subscribe' color='youtube'>
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
