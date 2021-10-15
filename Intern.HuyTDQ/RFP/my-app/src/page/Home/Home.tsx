import React, { useState, useEffect } from 'react';
import API_playlist from '../../api/API_playlist';


function Home() {
    const [ playlist, setPlaylist ] = useState({})


    useEffect( () => {
        const fetchPlaylist = async () => {
            try {
                const response = await API_playlist.getPlaylist({});
                if(response ){

                }
            } catch (error) {
                throw new Error("fetch error");
            }
        }
    }, [])
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

export default Home
