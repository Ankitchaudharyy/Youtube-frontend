import randomWords from 'random-words';

const generateFilters = () => {
    return randomWords({
        exactly: 20,
        maxLength: 15, 
        formatter: (word) => word[0].toUpperCase().concat(word.substring(1))
    }).filter((word) => word.length > 3);
}

export default generateFilters; 
