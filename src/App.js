import Header from './components/header/Header';
import { useState, useEffect } from 'react';
import { ShowMenuContext } from './context/SideMenuContext';
import SideMenu from './components/sideMenu/SideMenu';
import styles from './App.module.css';
import { FilterContext } from './context/FilterBarContext';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import VideoPlayer from './components/videoPlayer/VideoPlayer';
import SearchResults from './components/searchResults/SearchResults';

function App() {
	const [showMenu, setShowMenu] = useState(true);
	const [filter, setFilter] = useState('All');

	const preventResizing = (event) => {
		if (window.innerWidth < 1000) {
			setShowMenu(false);
			event.stopImmediatePropagation();
		}
	}

	useEffect(() => {
		window.addEventListener('resize', preventResizing)

		return () => window.removeEventListener('resize', preventResizing)

	}, [])

	return (
		<BrowserRouter>
			<ShowMenuContext.Provider value={{ showMenu, setShowMenu }} >
				<Header />
				<div className={styles.container}>
					<SideMenu showMenu={showMenu} />
					<FilterContext.Provider value={[filter, setFilter]}>
							<Routes>
								<Route path="/Youtube-frontend" element={<Home />}>
								</Route>
								<Route exact refresh="true" path="/video/:videoId" element={<VideoPlayer />} >
								</Route>
								<Route exact path='/search' element={<SearchResults />}></Route>
							</Routes>
					</FilterContext.Provider>
				</div>
			</ShowMenuContext.Provider>
		</BrowserRouter>
	);
}

export default App;