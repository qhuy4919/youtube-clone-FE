import React, { useState, useEffect } from 'react';
import Header from '../../component/header-nav/header-nav'
import Sidebar from '../../component/sidebar/sidebar';
import Video from '../../component/video/video';
function Home() {
    const [ playlist, setPlaylist ] = useState({})

    return (
        <div>
            <Header/>
            <Sidebar/>
        </div>
    )
}

export default Home
