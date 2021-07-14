var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
const port = process.env.PORT || 3000;
// const socket = require("socket.io");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/trouble.routes.js")(app);

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});

// const io = socket(server);

// io.on("connection", (socket) => {
//   socket.on("callet", (msg) => {
//     io.emit("callet", msg);
//     console.log("message: " + msg);
//   });
// });
