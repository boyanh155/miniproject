const mongoose = require("mongoose");
// mongoose.set("useCreateIndex", true);

async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/f8_education_dev", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log("Connect Success!!");
    } catch (err) {
        console.log("Connect Failure!!!");
    }
}

module.exports = { connect };