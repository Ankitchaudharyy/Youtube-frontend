import moment from 'moment';

function dateDifference(startingDate) {
    const formattedDate = moment(startingDate).format();
    return `${moment(formattedDate).toNow(true)} ago`;

}

function formatDateInMMDDYY(date) {
    return moment(date).format('MMMM DD, YYYY');
}
  
export { dateDifference, formatDateInMMDDYY }