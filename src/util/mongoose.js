module.exports = {
    multipleMongooseToObject: function(mongooseArray) {
        return mongooseArray.map((item) => item.toObject());
    },
    MongooseToObject: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};