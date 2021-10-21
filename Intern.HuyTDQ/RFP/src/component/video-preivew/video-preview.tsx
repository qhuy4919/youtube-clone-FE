import React from 'react'
import { Link } from 'react-router-dom';
import {Image} from 'semantic-ui-react';

import './video-preview.scss';

function VideoPreview(props: any){
    const { video, videoDuration,  expanded, viewAndTimeString, description} = props;
    return (
       <>
        <Link to='/'>
        <div className='video-preview'>
          <div className='image-container'>
            <Image src={video.snippet.thumbnails.medium.url}/>
            <div className='time-label'>
              <span>{videoDuration}</span>
            </div>
          </div>

          <div className='video-info'>
            <div className={['semi-bold', 'show-max-two-lines', expanded].join(' ')}>{video.snippet.title}</div>
            <div className='video-preview-metadata-container'>
              <div className='channel-title'>{video.snippet.channelTitle}</div>
              <div className='view-and-time'>{viewAndTimeString}</div>
              <div className='show-max-two-lines'>{description}</div>
            </div>
          </div>
        </div>
      </Link>
      </>
    )
}

export default VideoPreview;