// var express = require("express"),
  http = require("http"),
  port = 80,
  app = require("express"),
  server = http.createServer(app),
  bodyParser = require("body-parser"),
  io = require("socket.io")(server),
  

 app.use(express.json())
  app.use("/api/inventory", require("./api/inventory"))
app.use("/api/transactions", require("./api/transactions"))

app.all("/*", function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    // Set custom headers for CORS
    res.header(
      "Access-Control-Allow-Headers",
      "Content-type,Accept,X-Access-Token,X-Key"
    );
    if (req.method == "OPTIONS") {
      res.status(200).end();
    } else {
      next();
    }
  });

  app.get("/", function(req, res) {
    res.send(" Real time POS web app running.");
  });

  io.on("connection", function(socket) {
    socket.on("cart-transaction-complete", function() {
      socket.broadcast.emit("update-live-cart-display", {});
    });

    socket.on("live-cart-page-loaded", function() {
        socket.emit("update-live-cart-display", liveCart);
      });

      socket.emit("update-live-cart-display", liveCart)
      socket.on("update-live-cart", function(cartData) {
        liveCart = cartData;

        socket.broadcast.emit("update-live-cart-display", liveCart);
    });
});


