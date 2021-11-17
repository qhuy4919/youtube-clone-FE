import { VideoPreview } from '../video-preivew/video-preview';
import './related-video.scss';

export function RelatedVideo(props: any) {
  const { video } = props;
  const remainingVideos = video.slice(1);
  const relatedVideosPreviews = remainingVideos.map((relatedVideo: any) => (
    <VideoPreview
      video={relatedVideo}
      key={relatedVideo.id}
      pathname='/watch'
      search={`${relatedVideo.id}`}
      horizontal={true}
    />
  ));

  //
  if (!video || !video.length) {
    return <div className='related-video' />;
  }

  return <div className='related-video'>{relatedVideosPreviews}</div>;
}
