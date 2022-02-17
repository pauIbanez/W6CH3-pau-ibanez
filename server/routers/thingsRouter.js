const express = require("express");

const router = express.router();

router.get("/:idThing ", async (req, res) => {
  const id = req.params.idThing;
  console.log(id);
});

module.exports = router;
