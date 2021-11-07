import { useState, useEffect } from 'react';
import { Query } from '../../../access/api';
import {
  Video,
  VideoMetadata,
  VideoInfoBox,
  Loader,
  TrendingUpdateForm,
} from '../../../component/index';
import { useSelector, useDispatch } from 'react-redux';
import {
  getMostPopularVideo,
  filterVideoById,
} from '../../../state/reducer/video';
import { Icon } from 'semantic-ui-react';

import './watch-content.scss';

function getVideoById(videoList: any, videoId: any) {
  for (let item of videoList.data) {
    if (item.id === videoId) {
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
  const [isShowing, setIsShowing] = useState(false);
  // const [refreshPage, setRefreshPage] = useState(false);

  const videoList: any = useSelector(getMostPopularVideo);

  function toggleForm() {
    setIsShowing(!isShowing);
  }

  function closeModal() {
    setIsShowing(false);
  }

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
          <div className='position-fixed add-button'>
            <Icon
              name='pencil alternate'
              size='large'
              className=' add-button__icon'
              onClick={toggleForm}
            ></Icon>
          </div>
        </>
      )}
      {hasError && <>no data... </>}
      <TrendingUpdateForm
        videoInformation={videoInformation}
        isShowing={isShowing}
        hide={toggleForm}
        closeModal={closeModal}
      />
    </div>
  );
}

export default WatchContent;
