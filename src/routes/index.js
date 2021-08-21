const newRouter = require("./news.route");
const siteRouters = require("./site.route");

function route(app) {
    //Routers
    app.use("/news", newRouter);

    //Home , Search
    app.use("/", siteRouters);
}

module.exports = route;