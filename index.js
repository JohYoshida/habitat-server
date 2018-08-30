const express = require("express");
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Habitat server");
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
