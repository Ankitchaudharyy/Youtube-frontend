import React from 'react';
import CardMedia from '@mui/material/CardMedia';

function Thumbnail({thumbnailUrl}) {
    return (
        <CardMedia
            style={{
                marginLeft: "-12px"
            }}
            component="img"
            height="70%"
            width="100%"
            image={thumbnailUrl}
            alt="green iguana"
        />
    )
}

export default Thumbnail