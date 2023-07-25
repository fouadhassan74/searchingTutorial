const express = require("express");
const cors = require("cors");
const users = require("./users");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  const query = req.query.query;
  const keys = ["first_name", "last_name", "email"];
  const search = (data) => {
    const filter = data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
    return filter;
  };
  query ? res.json(search(users)) : res.json(users.slice(0, 10));
});
app.listen(9900, () => console.log("Bake end Server is running"));
