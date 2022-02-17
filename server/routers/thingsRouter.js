const express = require("express");

const router = express.Router();

router.get("/:id", async (req) => {
  console.log(req.params);
});

router.get("/", async (req) => {
  console.log("asaS");
});

module.exports = router;
