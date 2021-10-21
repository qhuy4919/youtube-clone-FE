import React, { useState } from "react";
import Header from "../../component/header-nav/header-nav";
import Sidebar from "../../component/sidebar/sidebar";
import HomeContent from "./home-content";

import "./home.scss";
function Home() {
  const [playlist, setPlaylist] = useState({});

  return (
    <div className="">
      <Header />
      <Sidebar />
      <div className="home-container">
        <HomeContent />
      </div>
    </div>
  );
}

export default Home;
