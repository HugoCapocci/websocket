const express = require("express");
const app = express();

require("./websocket-server");

app.use(express.static("public"));

app.listen(process.env.HTTP_PORT, () => {
  console.log("Server listening on port:", process.env.HTTP_PORT);
});
//test
