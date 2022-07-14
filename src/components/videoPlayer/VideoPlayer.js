import React, { useContext, useEffect } from 'react'
import { ShowMenuContext } from '../../context/SideMenuContext'
import { useParams } from 'react-router-dom';

function VideoPlayer() {
    const { setShowMenu } = useContext(ShowMenuContext);
    const {videoId} = useParams();

    useEffect(() => setShowMenu(false), [setShowMenu])

    console.log(videoId)

    return (
        <div><iframe id="ytplayer" type="text/html" width="1280" height="360"
            src={`https://www.youtube.com/embed/` + videoId + `?autoplay=1&origin=http://example.com`}
            frameborder="0"
            controls="0"
            disablekb="1"></iframe></div>
    )
}

export default VideoPlayer