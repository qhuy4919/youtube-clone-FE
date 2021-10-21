import React from 'react';
import {Divider} from "semantic-ui-react";
import VideoPreview from '../video-preivew/video-preview';

import './video-grid.scss';

function VideoGrid(props: any) {
    const { videos } = props; 
    if (!videos || !videos.length) {
        return <div/>;
      }

    const gridItems: any = videos.map((video: any) => {
        return (<VideoPreview video={video}
                              key={video.id}
                              pathname='/watch'
                              search={`?v=${video.id}`}/>
        );
      });
    return (
        <div>
            {gridItems}
            <Divider/>
        </div>
    )
}

export default VideoGrid
