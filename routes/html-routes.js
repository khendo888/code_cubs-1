// <<<<<<< HEAD
// =======

// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// >>>>>>> 52070143a7f6b4a89d89bbd988e722e2d87d7f01

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {



  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });



  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });
  app.get("/search", function(req, res) {
    res.render("index");
  });

};

// >>>>>>> 52070143a7f6b4a89d89bbd988e722e2d87d7f01



