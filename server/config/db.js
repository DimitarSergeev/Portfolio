const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/Portfolio';

exports.initializeDatabase = () => mongoose.connect(connectionString);