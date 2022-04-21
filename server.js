const express = require("express");

const server = express();
server.listen(process.env.PORT || 3000);

server.get("/", (req, res) => {
  res.send("Ceci est un test - Nodemon tourne ...");
});
