import React from "react";
import { useParams } from "react-router";
// import { get_param } from "../../util/get-param";
import WatchContent from "./watch-content/watch-content";
import Header from "../../component/header-nav/header-nav";

import "./watch.scss";
// interface MatchParams {
//   name: string;
// }
function Watch() {
  const { video_id }: any = useParams();
  if (!video_id) {
    return <div />;
  }
  return (
    <div>
      <Header />
      <div className="watch-container">
        <WatchContent video_id={video_id} />
      </div>
    </div>
  );
}

export default Watch;
