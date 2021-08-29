const newRouter = require("./news.route");
const siteRouters = require("./site.route");
const courseRouters = require("./courses.route");
const meRouters = require("./me.route");

function route(app) {
    //Routers
    app.use("/news", newRouter);
    app.use("/courses", courseRouters);
    app.use("/me", meRouters);

    //Home(DB) , Search
    app.use("/", siteRouters);
}

module.exports = route;