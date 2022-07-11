import React, { useState, useEffect, useContext, useRef } from 'react';
import styles from './styles/FilterBarStyles.module.css'
import generateFilters from './services/FilterService';
import { ShowMenuContext } from '../../context/SideMenuContext';
import { FilterContext } from '../../context/FilterBarContext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function FilterBar() {
	const [filters, setFilters] = useState([]);
	const [selectedFilter, setSeledtedFilter] = useContext(FilterContext);
	const [scrollX, setscrollX] = useState(0);
	const [scrollEnd, setscrollEnd] = useState(false);
	
	const scroll = useRef(null);

	const { showMenu, } = useContext(ShowMenuContext);

	useEffect(() => {
		const generatedFilters = generateFilters();
		setFilters(['All', ...generatedFilters, 'Recently Uploaded', 'Watch Later']);
	}, [])

	useEffect(() => {
		if (scroll.current && scroll?.current?.scrollWidth === scroll?.current?.offsetWidth) {
			setscrollEnd(true);
		} else {
			setscrollEnd(false);
		}
		return () => { };
	}, [scroll?.current?.scrollWidth, scroll?.current?.offsetWidth]);

	const scrollCheck = () => {
		setscrollX(scroll.current.scrollLeft);
		if (
			Math.floor(scroll.current.scrollWidth - scroll.current.scrollLeft) <= scroll.current.offsetWidth + 150
		) {
			setscrollEnd(true);
		} else {
			setscrollEnd(false);
		}
	};

	const slide = (shift) => {
		scroll.current.scrollLeft += shift;
		setscrollX(scrollX + shift);

		if (Math.floor(scroll.current.scrollWidth - scroll.current.scrollLeft) <= scroll.current.offsetWidth + 150) {
			setscrollEnd(true);
		} else {
			setscrollEnd(false);
		}
	};

	return (
		<div className={styles.filterBar}>
			<hr />
			<div
				className={`${styles.filterWords} `.concat(showMenu ? `${styles.filterWordsCollapsed}` : `${styles.filterWordsExpanded}`)}
				ref={scroll}
				onScroll={scrollCheck}
			>
				{
					scrollX !== 0 && (
						<ArrowBackIosIcon
							onClick={() => slide(-120)}
							className={styles.leftButton}
							fontSize="10px"
							sx={{
								stroke: "#ffffff",
								strokeWidth: 1
							}} />
					)
				}
				{
					filters.map((filter, index) => {
						return <button
							key={index}
							onClick={() => setSeledtedFilter(filter)}
							className={`${styles.filterButton} `.concat(selectedFilter === filter ? `${styles.selectedFilter}` : ``)
							}
						>
							{filter}
						</button>
					})
				}
				<span className={styles.emptySpace}></span>
				{
					!scrollEnd && (
						<ArrowForwardIosIcon
							onClick={() => slide(+120)}
							className={styles.rightButton}
							fontSize="10px"
							sx={{
								stroke: "#ffffff",
								strokeWidth: 1
							}}
						/>
					)
				}
			</div>
			<hr />
		</div>
	)
}

export default FilterBar;