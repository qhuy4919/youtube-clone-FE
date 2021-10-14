import React, { useState, useRef, useEffect } from "react";
import "./Video.scss";

const BASE_EMBED_URL = "https://www.youtube.com/embed/";
function Video(props: any) {
  const [url, setUrl] = useState("t_i_Dq2GjAI");
  const embedUrl = `${BASE_EMBED_URL}${url}`;
  //Dom implement with useRef
  const [attribute, setAttribute] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const [screen, setScreen] = useState([0, 0]);
  const videoAttibute: any = useRef();
  useEffect(() => {
    function updateSize() {
      setScreen([window.innerWidth, window.innerHeight]);
      setAttribute((attribute) => ({
        ...attribute,
        top: videoAttibute.current.offsetTop,
        left: videoAttibute.current.offsetLeft,
        width: videoAttibute.current.offsetWidth,
        height: videoAttibute.current.offsetHeight,
      }));
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  console.log("1");
  return (
    <div className="video-container">
      <div className="video" ref={videoAttibute}>
        <div className="reccomendation">
          <div className="preview">
            <img
              width="300"
              alt="thumbnail"
              src="https://i.ytimg.com/vi/_nFPpDGf_40/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBUSa3HpwFRcXHjdgSDmAKYfh2Bqw"
            />
            <div className="timestamp">31:44</div>
          </div>

          <div className="info">
            <div className="title">
              [2005] Tomomi Sano - Silent Flight [Full Album]
            </div>

            <div className="username">Qhuy</div>
            <div className="view-info">
              <div>347 N lượt xem</div>
              <div>1 Years Ago</div>
            </div>
          </div>
        </div>
      </div>
      <div className="video-information">
        <p>
          Screen's width and height:{screen[0]} - {screen[1]}
        </p>
        <p>
          Div's postion: {attribute.top} - {attribute.left}
        </p>
        <p>
          Div's width and height: {attribute.width} - {attribute.height}{" "}
        </p>
      </div>
    </div>
  );
}
export default Video;
