var projects = require("../projects.json")
/*
 * GET home page.
 */

exports.view = function(req, res){
  // Here you should implement your random landing page rendering functionality

  var random_num = Math.random();
  console.log(random_num);
  if (random_num > 0.5) {
  	res.render("index_alternate", projects);
  }
  else {
  	res.render("index", projects);
  }
};