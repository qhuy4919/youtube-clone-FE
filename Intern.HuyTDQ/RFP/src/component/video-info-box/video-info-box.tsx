import React, { useState, useEffect } from 'react';
import { Image, Button, Divider } from 'semantic-ui-react';
import API_channel from '../../access/api/api-channel';

import './video-info-box.scss';

export function VideoInfoBox(props: any) {
  const { video, channelId } = props;
  const [channel, setChannel] = useState<any | undefined>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState<any | undefined>();
  const [collapsed, setCollapsed] = useState(true);

  const getDescriptionParagraphs = () => {
    const videoDescription = video.snippet ? video.snippet.description : null;
    if (!videoDescription) {
      return null;
    }
    return videoDescription
      .split('\n')
      .map((paragraph: string, index: number) => (
        <p key={index}>
          <li>{paragraph}</li>
        </p>
      ));
  };

  const getConfig = () => {
    let descriptionTextClass = 'collapsed';
    let buttonTitle = 'Show More';
    if (!collapsed) {
      descriptionTextClass = 'expanded';
      buttonTitle = 'Show Less';
    }
    return {
      descriptionTextClass,
      buttonTitle,
    };
  };

  const onToggleCollapseButtonClick = () => {
    setCollapsed(!collapsed);
  };

  const getSubscriberButtonText = () => {
    if (channel) {
      // const subscriberCount = channel;
      return `Subscribe 10M`;
    }
  };

  const { descriptionTextClass, buttonTitle } = getConfig();
  const publishedAtString = video.snippet.publishedAt;

  //fecth channel information
  useEffect(() => {
    let relevant = true;
    const fetchChannel = async () => {
      try {
        setIsLoading(true);
        const response: any = await API_channel.getChannel({ channelId });
        if (response && relevant) {
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
  return (
    <div>
      {!isLoading && (
        <>
          <div className='video-info-box'>
            <Image
              className='channel-image'
              src={channel.snippet.thumbnails.medium.url}
              circular
            />
            <div className='video-info'>
              <div className='channel-name'>{channel.snippet.title}</div>
              <div className='video-publication-date'>{publishedAtString}</div>
            </div>
            <Button className='subscribe' color='youtube'>
              {getSubscriberButtonText()}
            </Button>
            <div className='video-description'>
              <div className={descriptionTextClass}>
                {getDescriptionParagraphs()}
              </div>
              <Button compact onClick={() => onToggleCollapseButtonClick()}>
                {buttonTitle}
              </Button>
            </div>
          </div>
          <Divider />
        </>
      )}
      {hasError && <>something wrong</>}
    </div>
  );
}
