import { VideoPreview } from '../video-preivew/video-preview';
import VideoGridHeader from './video-grid-header/video-grid-header';
import './video-grid.scss';

// type Videos = {
//   video?: string[];
//   id?: string[];
// };
export function VideoGrid(props: any) {
  const { title, videos } = props;
  if (!videos || !videos.length) {
    return <div />;
  }

  const gridItems: any = videos.map((video: any) => {
    return (
      <VideoPreview
        key={video.id}
        video={video}
        pathname='/watch/'
        video_id={video.id}
      />
    );
  });
  return (
    <>
      <VideoGridHeader title={title} />
      <div className='video-grid'>{gridItems}</div>
    </>
  );
}
