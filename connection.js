const mongoose = require("mongoose");

async function connectMongodb(url) {
    return mongoose.connect(url)
        .then(() => console.log('MongoDb connected'))
        .catch(() => console.log('Error in connecting MongoDb'));
}

module.exports = connectMongodb;