import { useState, useEffect } from 'react';
import { Query } from '../../../access/api';
import {
  Video,
  VideoMetadata,
  VideoInfoBox,
  Loader,
} from '../../../component/index';
import { useDispatch, useSelector } from 'react-redux';
import { getMostPopularVideo } from '../../../state/reducer/video';
import './watch-content.scss';

function getVideoById(videoList: any, videoId: any) {
  for (let item of videoList.data) {
    console.log(item);
    if (item.id === videoId) {
      console.log(item.id);
      return item;
    }
  }
  return null;
}

function WatchContent(props: any) {
  const { video_id } = props;
  const [videoInformation, setVideoInformation] = useState([]);
  const [channelId, setChannelId] = useState('');
  const [isLoading, setIsloading] = useState<Boolean>(true);
  const [hasError, setHasError] = useState(false);
  const videoList: any = useSelector(getMostPopularVideo);
  //fetch video
  useEffect(() => {
    let relevant = true;
    const fetchVideo = async () => {
      setIsloading(true);
      setHasError(false);
      try {
        // const response: any = await Query.video.item({ video_id });
        const response = getVideoById(videoList, video_id);
        if (response && relevant) {
          console.log(response);
          setVideoInformation(response);
          setChannelId(response.snippet.channelId);
        }
      } catch (error) {
        if (relevant) setHasError(true);
      } finally {
        if (relevant) {
          setIsloading(false);
        }
      }

      return function cleanup() {
        relevant = false;
      };
    };
    fetchVideo();
  }, [video_id]);
  return (
    <div className='watch-grid'>
      {isLoading ? (
        <div className='loader'>
          <Loader />
        </div>
      ) : (
        <>
          <Video className='video' id={video_id} />
          <VideoMetadata className='metadata' video={videoInformation} />
          {channelId.length < 1 ? (
            <></>
          ) : (
            <VideoInfoBox
              className='video-info-box'
              video={videoInformation}
              channelId={channelId}
            />
          )}
        </>
      )}
      {hasError && <>no data... </>}
    </div>
  );
}

export default WatchContent;
