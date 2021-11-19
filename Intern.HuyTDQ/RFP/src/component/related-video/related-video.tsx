import { useState, useEffect } from 'react';
import { VideoPreview } from '../video-preivew/video-preview';
import { Loader } from '../loader/loader';
import { responseVideo } from '../../model/video';
import { Query } from '../../access/api/query-api';
import './related-video.scss';

export function RelatedVideo(props: any) {
  const [relateVideo, setRelateVideo] = useState<Array<responseVideo>>();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsloading] = useState(true);
  let relatedVideosPreviews: any = [];

  //
  useEffect(() => {
    let relevant = true;
    const abortCtrl = new AbortController();
    const response: any = Query.video
      .list({ _page: 1, _limit: 10 })
      .then((result: any) => {
        if (relevant && result) {
          setRelateVideo(result.data);
          setIsloading(false);
        }
      });
    return () => {
      relevant = false;
      abortCtrl.abort();
    };
  }, []);

  if (relateVideo) {
    relatedVideosPreviews = relateVideo.map((relatedVideo: any) => (
      <VideoPreview
        video={relatedVideo}
        key={relatedVideo.id}
        pathname='/watch/'
        videoId={relatedVideo.id}
        horizontal={true}
        detailPreview={true}
      />
    ));
  }

  //
  // if (!video || !video.length) {
  //   return <div className='related-video' />;
  // }

  return (
    <div className='related-video'>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>{relatedVideosPreviews} </>
      )}
    </div>
  );
}
