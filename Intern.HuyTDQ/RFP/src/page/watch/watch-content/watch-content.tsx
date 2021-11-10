import { useState, useEffect } from 'react';
import {
  Video,
  VideoMetadata,
  VideoInfoBox,
  Loader,
  TrendingUpdateForm,
} from '../../../component/index';
import { useSelector, useDispatch } from 'react-redux';
import * as videoAction from '../../../state/action/video';
import { getVideoById } from '../../../state/reducer/video';
import { Icon } from 'semantic-ui-react';

import './watch-content.scss';

function WatchContent(props: any) {
  const { video_id } = props;
  const [videoInformation, setVideoInformation] = useState([]);
  const [channelId, setChannelId] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  const dispatch = useDispatch();
  const videoDetail: any = useSelector(getVideoById);
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
      setHasError(false);
      try {
        dispatch(videoAction.getVideoById.request(video_id));
        const response = videoDetail;
        if (response && relevant) {
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
  }, [videoDetail]);

  return (
    <div className='watch-grid'>
      {!videoDetail ? (
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
