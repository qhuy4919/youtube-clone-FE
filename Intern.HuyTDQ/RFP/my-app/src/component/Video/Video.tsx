import React, { useState, useRef, useEffect } from 'react'
import './Video.scss';

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';
function Video(props: any) {
    const [url, setUrl] = useState("t_i_Dq2GjAI");
    const embedUrl = `${BASE_EMBED_URL}${url}`;
    //Dom implement with useRef
    const [ attribute , setAttribute ] = useState({
      top: 0,
      left: 0,
      width: 0,
      height: 0
    });
    const [screen, setScreen ] = useState([0, 0]);
    const videoAttibute: any = useRef();
    useEffect(() => {
      function updateSize() {
        setScreen([window.innerWidth, window.innerHeight]);
        setAttribute({
          ...attribute,
          top : videoAttibute.current.offsetTop,
          left : videoAttibute.current.offsetLeft,
          width : videoAttibute.current.offsetWidth,
          height : videoAttibute.current.offsetHeight,
        })
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    },[])
    return (
      <div className='video-container'>
        <div className="video" ref={videoAttibute}>
          <iframe  className='video-player' src={embedUrl} frameBorder='1'
                  allow='autoplay; encrypted-media' allowFullScreen title='video' />
        </div>
        <div className="video-information">
            <p>Screen's width and height:{screen[0]} - {screen[1]}</p>
            <p>Div's postion: {attribute.top} - {attribute.left}</p>
            <p>Div's width and height: {attribute.width} - {attribute.height} </p>

        </div>
    </div>
    )
}
export default Video

