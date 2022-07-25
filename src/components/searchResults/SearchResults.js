import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';
import { fetchVideos } from './../../services/SearchVideoService';
import { getVideoDetails } from './../../helpers/VideoDetailsHelper'

function SearchResults() {
	const searchText = useLocation().state.searchText;

	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		fetchVideos(searchText)
			.then(response => {
				setSearchResults(getVideoDetails(response.data.items))
			}).catch(err => {
				console.log(err);
			})
	}, [searchText]);

	return (
		<div>
			{
				searchResults.map((searchResult, index) => {
					return <div key={index}>
						{searchResult.title}
					</div>
				})
			}
		</div>
	)
}

export default SearchResults