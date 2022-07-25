import React from 'react';
import CardMedia from '@mui/material/CardMedia';

function Thumbnail({ thumbnailUrl , height}) {    
    return (
        <CardMedia
            style={{
                marginLeft: "-12px"
            }}
            component="img"
            height={height}
            width="100%"
            image={thumbnailUrl}
            alt="green iguana"
        />
    )
}

export default Thumbnail