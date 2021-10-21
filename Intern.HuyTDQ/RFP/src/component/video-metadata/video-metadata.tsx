import React from "react";
import { Button, Divider, Icon } from "semantic-ui-react";
import "./video-metadata.scss";

function VideoMetadata(props: any) {
  const { video } = props;

  if (!video) {
    return <div />;
  }

  return (
    <div className="video-metadata">
      <h3>{props.video.snippet.title}</h3>
      <div className="video-stats">
        <span>100.000 views</span>
        <div className="video-actions">
          <Button basic icon labelPosition="left">
            <Icon name="share" />
            Share
          </Button>
          <Button basic icon>
            <Icon name="add circle" />
          </Button>
          <Button basic icon>
            <Icon name="ellipsis horizontal" />
          </Button>
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default VideoMetadata;
