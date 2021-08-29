const Course = require("../models/Course.model");
const { MongooseToObject } = require("../../util/mongoose");

class CourseController {
    // [GET] /courses/:slug

    show(req, res, next) {
            Course.findOne({ slug: req.params.slug })
                .then((courses) => {
                    res.render("courses/show", { courses: MongooseToObject(courses) });
                })
                .catch(next);
        }
        // [GET] /courses/create
    create(req, res, next) {
            res.render("courses/create");
        }
        // [POST] /courses/create
    store(req, res, next) {
            const formData = req.body;
            formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
            formData.slug = ``;
            const course = new Course(formData);
            course
                .save()
                .then(() => res.redirect("/"))
                .catch((err) => {
                    res.send("Trang tạo lỗi");
                });
        }
        // [POST] /courses/:id/edit
    edit(req, res, next) {
            Course.findById(req.params.id)
                .then((courses) =>
                    res.render("courses/edit", { courses: MongooseToObject(courses) })
                )
                .catch((next) => {
                    res.send("Trang cập nhật lỗi");
                });
        }
        //[PUT] /courses/:id
    update(req, res, next) {
            Course.updateOne({ _id: req.params.id }, req.body)
                .then(() => res.redirect("/me/stored/courses"))
                .catch(next);
        }
        //[DELETE] /courses/:id

    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect("back"))
            .catch(next);
    }
}

module.exports = new CourseController();