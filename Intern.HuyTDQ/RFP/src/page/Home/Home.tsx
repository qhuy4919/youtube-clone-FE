import React, { useState, useEffect } from 'react';
import API_playlist from '../../access/api/API_playlist';


function Home() {
    const [ playlist, setPlaylist ] = useState({})


    useEffect( () => {
        const fetchPlaylist = async () => {
            try {
                const response = await API_playlist.getPlaylist({});
                if(response ){
                    console.log(response);
                }
            } catch (error) {
                throw new Error("fetch error");
            }
        }
        fetchPlaylist();
    }, [])
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

export default Home
