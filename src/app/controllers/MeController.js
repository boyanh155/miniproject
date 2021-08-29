const Course = require("../models/Course.model");
const { multipleMongooseToObject } = require("../../util/mongoose");

class MeController {
    // [GET] /me/stored.course
    stored(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render("me/me-courses", {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();