const max = 100;
const min = 1;

const randomViews = () => {
    return (Math.floor(Math.random() * (max - min)) + min) + 'K';
}

const randomLikes = randomViews;

export {
    randomViews,
    randomLikes
}