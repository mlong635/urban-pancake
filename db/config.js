const secretKeys = require('../env/config');
const mongoose = require('mongoose');

mongoose.connect(secretKeys.MONGOOSE_URI);

const db = mongoose.connection;
// db.on('error', console.log('There was an error connecting to mongoose'));
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('in DB', db);
});


module.exports = db;