import moment from 'moment';

function dateDifference(startingDate) {
    const formattedDate = moment(startingDate).format();
    return `${moment(formattedDate).toNow(true)} ago`;
    
}

export { dateDifference }