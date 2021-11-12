import { Divider, Button, Icon } from 'semantic-ui-react';
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
          <Button basic icon labelPosition='left'>
            <Icon name='share' />
            Share
          </Button>
          <Button basic icon>
            <Icon name='add circle' />
          </Button>
          <Button basic icon>
            <Icon name='ellipsis horizontal' />
          </Button>
        </div>
      </div>
      <Divider />
    </div>
  );
}
