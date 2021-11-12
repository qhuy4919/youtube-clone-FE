import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import { getVideoDurationString } from '../../util/time-format';
import './video-preview.scss';

function convertViewCount(viewCount: string) {
  const formatView = ['N', 'Tr', 'T'];
  const x = Math.floor(viewCount.length / 3);
  let res =
    viewCount.length % 3 === 0
      ? viewCount.slice(0, 3)
      : viewCount.slice(0, viewCount.length - 3 * x);
  if (viewCount.length % 3) {
    res = res.concat(formatView[Math.floor(viewCount.length / 3) - 1]);
  } else {
    res = res.concat(formatView[Math.floor(viewCount.length / 3) - 2]);
  }
  return res;
}

export function VideoPreview(props: any) {
  const { video, pathname, video_id } = props;
  const duration = video.contentDetails ? video.contentDetails.duration : null;
  const horizontal = props.horizontal ? 'horizontal' : null;
  const expanded = props.expanded ? 'expanded' : null;
  const videoDuration = getVideoDurationString(duration);
  const video_url = pathname.concat(video_id);
  let viewAndTime = '';
  const viewCount = video.statistics ? video.statistics.viewCount : null;

  //
  if (viewCount) {
    const viewCountShort = video.statistics.viewCount;
    viewAndTime = `${convertViewCount(viewCountShort)} views • 1 year ago`;
  } else viewAndTime = '';

  return (
    <Link to={{ pathname: video_url }}>
      <div className={['video-preview', horizontal, expanded].join(' ')}>
        <div className='image-container'>
          <Image src={video.snippet.thumbnails.medium.url} />
          <div className='time-label'>
            <span>{videoDuration}</span>
          </div>
        </div>

        <div className='video-info'>
          <div
            className={['semi-bold', 'show-max-two-lines', expanded].join(' ')}
          >
            {video.snippet.title}
          </div>
          <div className='video-preview-metadata-container'>
            <div className='channel-title'>{video.snippet.channelTitle}</div>
            <div className='view-and-time'>{viewAndTime}</div>
            {expanded && (
              <div className={'show-max-two-lines'}>
                {video.snippet.description}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
