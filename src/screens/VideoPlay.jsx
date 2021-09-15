import React from 'react'
import ReactPlayer from 'react-player'
import "./VideoPlay.css"

require('dotenv').config();

function VideoPlay(movieId) {

    const youtubeUrl = "https://www.youtube.com/watch?v=bsLP_tFMDxo";

    return (
        <div className="playScreen">

            <ReactPlayer controls url= {youtubeUrl} width= "1523px" height="700px"/>

        </div>
    )
}

export default VideoPlay
