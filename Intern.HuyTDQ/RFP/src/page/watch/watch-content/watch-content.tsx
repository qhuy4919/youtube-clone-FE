import { useState, useEffect } from 'react';
import {
  Video,
  VideoMetadata,
  VideoInfoBox,
  Loader,
  TrendingUpdateForm,
} from '../../../component/index';
import { Icon } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import * as videoAction from '../../../state/action/video';
import * as watchAction from '../../../state/action/watch';
import {
  getVideoById,
  getMostPopularVideo,
  getLoading,
} from '../../../state/reducer/video';
import './watch-content.scss';

function WatchContent(props: any) {
  const { videoId } = props;
  const [videoInformation, setVideoInformation] = useState([]);
  const [channelId, setChannelId] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const dispatch = useDispatch();
  const videoDetail: any = useSelector(getVideoById);
  const videoList: any = useSelector(getMostPopularVideo);
  const isLoading: boolean = useSelector(getLoading);

  //fetch video
  useEffect(() => {
    let relevant = true;
    const fetchVideo = () => {
      setHasError(false);
      try {
        if (videoList.data.length < 1) {
          dispatch(watchAction.watchDetail.request(videoId));
        } else {
          dispatch(videoAction.getVideoById.request(videoId));
        }
        const response = videoDetail;
        if (response && Object.keys(response).length > 0 && relevant) {
          setVideoInformation(response);
          setChannelId(response.snippet.channelId);
        }
      } catch (error) {
        if (relevant) setHasError(true);
      } finally {
      }

      return function cleanup() {
        relevant = false;
      };
    };
    fetchVideo();
  }, [JSON.stringify(videoDetail)]);

  function toggleForm() {
    setIsShowing(!isShowing);
  }

  function closeModal() {
    setIsShowing(false);
  }

  return (
    <div className='watch-grid'>
      {isLoading ? (
        <div className='loader'>
          <Loader />
        </div>
      ) : (
        <>
          <Video className='video' id={videoId} />
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
