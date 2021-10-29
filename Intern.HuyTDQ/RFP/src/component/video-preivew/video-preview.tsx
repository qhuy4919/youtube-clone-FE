import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import { getVideoDurationString } from '../../util/time-format';
import './video-preview.scss';

export function VideoPreview(props: any) {
  const { video, pathname, video_id } = props;
  const duration = video.contentDetails ? video.contentDetails.duration : null;
  const videoDuration = getVideoDurationString(duration);
  const video_url = pathname.concat(video_id);

  const getFormattedViewAndTime = (video: any) => {
    const viewCount = video.statistics ? video.statistics.viewCount : null;
    if (viewCount) {
      const viewCountShort = video.statistics.viewCount;
      return `${viewCountShort} views • 1 year ago`;
    }
    return '';
  };
  return (
    <>
      <Link to={{ pathname: video_url }}>
        <div className='video-preview'>
          <div className='image-container'>
            <Image src={video.snippet.thumbnails.medium.url} />
            <div className='time-label'>
              <span>{videoDuration}</span>
            </div>
          </div>

          <div className='video-info'>
            <div>{video.snippet.title}</div>
            <div className='video-preview-metadata-container'>
              <div className='channel-title'>{video.snippet.channelTitle}</div>
              <div className='view-and-time'>
                {getFormattedViewAndTime(video)}
              </div>
              {/* <div className='show-max-two-lines'>{description}</div> */}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
