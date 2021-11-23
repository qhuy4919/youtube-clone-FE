import React from 'react';
import { Divider, Icon } from 'semantic-ui-react';
import './video-metadata.scss';

export function VideoMetadata(props: any) {
  const { video } = props;

  //
  if (!video || video.length <= 0) {
    return <div />;
  }

  return (
    <div className='video-metadata-container'>
      <h3>{video.snippet.title}</h3>
      <div className='video-stats'>
        <span>100.000 views</span>
        <div className='video-actions'>
          <button>
            <Icon name='share' />
            Share
          </button>
          <button>
            <Icon name='add circle' />
          </button>
          <button>
            <Icon name='ellipsis horizontal' />
          </button>
        </div>
      </div>
      <Divider />
    </div>
  );
}
