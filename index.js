const app = require("express")();
const PORT = 8080;

app.use(express.json());

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "Ts",
    size: "large",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "we need a logo" });
  }
  res.send({
    tshirt: `Ts with your ${logo} and id of ${id}`,
  });
});
