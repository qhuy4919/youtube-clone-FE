import { VideoGridHeader } from './video-grid-header/video-grid-header';
import { VideoPreview } from '../video-preivew/video-preview';
import { ContentModal } from '../modal/content-modal';
import './video-grid.scss';

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
        videoId={video.id}
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
