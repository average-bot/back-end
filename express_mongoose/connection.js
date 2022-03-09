const mongoose = require('mongoose');


//Connection URL
//const databaseURL = mongodb + 'mongodb+srv://teacher123:teacher123@sandra.kntqq.mongodb.net/HKRdatabase?retryWrites=true&w=majority';
const databaseURL = 'mongodb+srv://tester:tester!@sandra.kntqq.mongodb.net/HKRDatabase?retryWrites=true&w=majority';
async function main() {
    console.log('Connected to to DB!');

    // Here we connect mongoose to cloud atlas server.
    mongoose.connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true });

    const mgDB = mongoose.connection;
    mgDB.on('connected', console.log.bind(console, 'MongoDB & Mongoose connected!'));

}
module.exports = main;
