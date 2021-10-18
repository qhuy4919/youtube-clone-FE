import React, { useState, useEffect } from 'react';
import Header from '../../component/header-nav/header-nav'

function Home() {
    const [ playlist, setPlaylist ] = useState({})

    return (
        <div>
            <Header/>
            <h1>Hello World</h1>
        </div>
    )
}

export default Home
