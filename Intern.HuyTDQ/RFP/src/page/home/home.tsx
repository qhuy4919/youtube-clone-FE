import React, { useState } from 'react';
import Header from '../../component/header-nav/header-nav'
import Sidebar from '../../component/sidebar/sidebar';
import HomeContent from './home-content';

import './home.scss';
function Home() {
    const [ playlist, setPlaylist ] = useState({})

    return (
        <div className='container'>
            <Header/>
            <Sidebar/>
            <div className="home">
                <HomeContent/>
            </div>
        </div>
    )
}

export default Home
