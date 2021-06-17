// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/index.html", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/404.html", (request, response) => {
	response.sendFile(__dirname + "/views/404.html");
});
app.get("/about.html", (request, response) => {
	response.sendFile(__dirname + "/views/about.html");
});
app.get("/blog-detail.html", (request, response) => {
	response.sendFile(__dirname + "/views/blog-detail.html");
});
app.get("/blog-grid.html", (request, response) => {
	response.sendFile(__dirname + "/views/blog-grid.html");
});
app.get("/product-detail.html", (request, response) => {
	response.sendFile(__dirname + "/views/product-detail.html");
});
app.get("/cart.html", (request, response) => {
	response.sendFile(__dirname + "/views/cart.html");
});
app.get("/checkout.html", (request, response) => {
	response.sendFile(__dirname + "/views/checkout.html");
});
app.get("/contact-us.html", (request, response) => {
	response.sendFile(__dirname + "/views/contact-us.html");
});
app.get("/product-listing.html", (request, response) => {
	response.sendFile(__dirname + "/views/product-listing.html");
});
app.get("/compare.html", (request, response) => {
	response.sendFile(__dirname + "/views/compare.html");
});
app.get("/whishlist.html", (request, response) => {
	response.sendFile(__dirname + "/views/whishlist.html");
});
app.get("/chapterone/checkout.html", (request, response) => {
	response.sendFile(__dirname + "/views/chapterone/checkout.html");
});
app.get("/chapterone/delivery-options.html", (request, response) => {
	response.sendFile(__dirname + "/views/chapterone/delivery-options.html");
});
app.get("/chapterone/instagram.html", (request, response) => {
	response.sendFile(__dirname + "/views/chapterone/instagram.html");
});
app.get("/chapterone/product-browsing.html", (request, response) => {
	response.sendFile(__dirname + "/views/chapterone/product-browsing.html");
});
app.get("/chapterone/product-detail.html", (request, response) => {
	response.sendFile(__dirname + "/views/chapterone/product-detail.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
