const express = require("express");
const Thing = require("../../db/models/Thing");
const errorTypes = require("../middlewares/errors/errorTypes");

const router = express.Router();

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const thing = await Thing.findById(id);
    res.json(thing);
  } catch (error) {
    error.type = errorTypes.badRequest;
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const things = await Thing.find();
    res.json(things);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
