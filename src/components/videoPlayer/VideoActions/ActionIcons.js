import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ReplyIcon from '@mui/icons-material/Reply';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { randomLikes } from '../../../helpers/RandomNumbersHelper';

const actionIcons = [ 
    {
        name : randomLikes(),
        toolTipText : "I like this",
        outlinedIcon : <ThumbUpIcon />,
        filledIcon :  <ThumbUpOffAltIcon />
    },
    {
        name : "DISLIKE",
        toolTipText : "I dislike this",
        outlinedIcon : <ThumbDownAltIcon />,
        filledIcon :  <ThumbDownOffAltIcon />
    },
    {
        name : "SHARE",
        toolTipText : "Share",
        outlinedIcon : <ReplyIcon />,
        filledIcon : <ReplyIcon />  
    },
    {
        name : "THANKS",
        toolTipText :"Show Support with Super Thanks" ,
        outlinedIcon : <FavoriteOutlinedIcon />,
        filledIcon :  <FavoriteBorderIcon />,
    },
    {
        name : "CLIP",
        toolTipText : "Clip",
        outlinedIcon : <ContentCutIcon />,
        filledIcon :  <ContentCutIcon />
    },
    {
        name : "SAVE",
        toolTipText : "Save",
        outlinedIcon : <PlaylistAddIcon />,
        filledIcon :  <PlaylistAddIcon />
    }
];

export { actionIcons }

