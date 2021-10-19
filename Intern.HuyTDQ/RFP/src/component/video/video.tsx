import React from 'react'
import './video.scss'
const BASE_EMBED_URL = 'https://www.youtube.com/embed/';
function Video(props: any) {
  const { id } = props;
  const embedUrl = id ?  `${BASE_EMBED_URL}${props.id}` : `https://www.youtube.com/embed/Y4nEEZwckuU`;
  return (
    <div className='video-container'>
      <div className="video">
        <iframe className='video-player' src={embedUrl} frameBorder='0'
                allow='autoplay; encrypted-media' allowFullScreen title='video' />
      </div>

    </div>
  )
}

export default Video
