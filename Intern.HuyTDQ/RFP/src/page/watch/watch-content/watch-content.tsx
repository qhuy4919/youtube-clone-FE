import { useState, useEffect } from 'react';
import API_Playlist from '../../../access/api/api-playlist';
import {
  Video,
  VideoMetadata,
  VideoInfoBox,
  Loader,
} from '../../../component/index';
import './watch-content.scss';

function WatchContent(props: any) {
  const { video_id } = props;
  const [videoInformation, setVideoInformation] = useState([]);
  const [channelId, setChannelId] = useState('');
  const [isLoading, setIsloading] = useState<Boolean>(true);
  const [hasError, setHasError] = useState(false);

  //fetch video
  useEffect(() => {
    let relevant = true;
    const fetchVideo = async () => {
      setIsloading(true);
      setHasError(false);
      try {
        const response: any = await API_Playlist.getPlaylistItem({ video_id });
        if (response && relevant) {
          setVideoInformation(response.data);
          setChannelId(response.data.snippet.channelId);
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
          {channelId.length <= 0 ? (
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
