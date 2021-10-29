import { VideoPreview } from '../video-preivew/video-preview';
import './related-video.scss';

export function RelatedVideo(props: any) {
  const { video } = props;
  if (!video || !video.length) {
    return <div className='related-videos' />;
  }

  const relatedVideosPreviews = video.map((relatedVideo: any) => (
    <VideoPreview
      video={relatedVideo}
      key={relatedVideo.id}
      pathname='/watch'
      search={`${relatedVideo.id}`}
      horizontal={true}
    />
  ));
  return <div className='related-videos'>{relatedVideosPreviews}</div>;
}
