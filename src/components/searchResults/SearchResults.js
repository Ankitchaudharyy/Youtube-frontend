import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';
import { fetchVideos } from './../../services/SearchVideoService';
import { getSearchDetails } from './../../helpers/SearchResultsHelper'

function SearchResults() {
	const searchText = useLocation().state.searchText;

	const [searchResults, setSearchResults] = useState({videos : [], channels : []});

	useEffect(() => {
		fetchVideos(searchText)
			.then(response => {
				setSearchResults(getSearchDetails(response.data.items))
			}).catch(err => {
				console.log(err);
			})
	}, [searchText]);

	return (
		<div>
			{
				searchResults.channels.map((searchResult, index) => {
					return <div key={index}>
						{searchResult.title}
					</div>
				})
			}
			<h1>Break</h1>
			{
				searchResults.videos.map((searchResult, index) => {
					return <div key={index}>
						{searchResult.title}
					</div>
				})
			}
		</div>
	)
}

export default SearchResults