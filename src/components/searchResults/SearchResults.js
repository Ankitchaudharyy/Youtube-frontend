import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';
import { fetchVideos } from './../../services/SearchVideoService';
import { getSearchDetails } from './../../helpers/SearchResultsHelper';
import ChannelResult from './channelResult/ChannelResult';
import styles from './styles/SearchResultsStyles.module.css';
import VideoResult from './videoResult/VideoResult';

function SearchResults() {
	const searchText = useLocation().state.searchText;

	const [searchResults, setSearchResults] = useState({ videos: [], channels: [] });

	useEffect(() => {
		fetchVideos(searchText)
			.then(response => {
				setSearchResults(getSearchDetails(response.data.items))
			}).catch(err => {
				console.log(err);
			})
	}, [searchText]);

	return (
		<div className={styles.search}>
			<div className={styles.searchResults}>
				{
					searchResults.channels.map((searchResult, index) => {
						return <ChannelResult key={index} channelDetails={searchResult} />
					})
				}
				{
					searchResults.channels.length > 0 &&
					<hr className={styles.horizontalDivision}/>
				}
				{
					searchResults.videos.map((video,index)=>{
						return <VideoResult key={index} videoDetails={video} />
					})
				}
			</div>
			<div className={styles.emptyDiv}>

			</div>
		</div>

	)
}

export default SearchResults