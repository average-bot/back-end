
// import our modules.
const moment = require('moment');


// create  a function to show the date.
function showDate(date) {
    //return moment("20111031", "YYYYMMDD").fromNow();
    //return moment(date).format("MM DD YYYY");
    //return moment().format('LTS');
    return moment().subtract(3, 'days').calendar();
}

exports.showDate = showDate;