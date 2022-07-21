const max = 100;
const min = 1;

const randomNumberGenerator = () => {
    return (Math.floor(Math.random() * (max - min)) + min);
}

const randomLikes = () => randomNumberGenerator() + 'K';

const randomViews = randomLikes;

const randomSubscribers = () => randomNumberGenerator() + 'M';

export {
    randomViews,
    randomLikes,
    randomSubscribers
}