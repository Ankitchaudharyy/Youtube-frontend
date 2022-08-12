import React, { useState, useRef } from 'react';
import './styles/SearchFieldStyles.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router';
import SpeechToTextModal from './speechToTextModal/SpeechToTextModal';
import SpeechRecognition from 'react-speech-recognition';


function SearchField() {
    let navigate = useNavigate();
    const inputRef = useRef('');
    const audioRef = useRef('');
    const interval = useRef('');

    const [openSpeechToText, setOpenSpeechToText] = useState(false);

    const handleOpen = () => {
        setOpenSpeechToText(true);
        SpeechRecognition.startListening();
        interval.current = setTimeout(() => {
            if(audioRef.current.innerHTML!=='')
                handleClose(audioRef.current.innerHTML);
        }, 7000)
    };

    const handleClose = (transcript) => {
        clearTimeout(interval);
        setOpenSpeechToText(false);
        SpeechRecognition.stopListening();
        if (transcript !== '')
            setInputText(transcript);
        showSearchResults();
    }

    const setInputText = (transcript) => {
        inputRef.current.value = transcript;
    }

    const showSearchResults = () => {
        const inputValue = inputRef.current.value;

        if (inputValue !== '') {
            navigate('/search', { state: { searchText: inputValue } })
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            showSearchResults();
        }
    }

    return (
        <div className="searchField">
            <input type="search" placeholder="Search" className="searchBox" ref={inputRef} onKeyPress={handleKeyPress} />
            <Tooltip title="Search" placement="bottom-start">
                <SearchIcon className='searchIcon' onClick={() => showSearchResults()} />
            </Tooltip>
            <Tooltip title="Search with your voice" placement="bottom-start">
                <MicIcon className='micIcon' onClick={handleOpen} />
            </Tooltip>
            <SpeechToTextModal open={openSpeechToText} handleClose={handleClose} ref={audioRef} />
        </div>
    )
}

export default SearchField