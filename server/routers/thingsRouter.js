const express = require("express");
const Thing = require("../../db/models/Thing");
const errorTypes = require("../middlewares/errors/errorTypes");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const things = await Thing.find();
    res.json(things);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const thing = await Thing.findById(id);
    res.json(thing);
  } catch (error) {
    error.type = errorTypes.badRequest;
    error.info = "This is likely to be because of an invalid id";
    next(error);
  }
});

router.use((req, res, next) => {
  if (req.globals.readOnly) {
    const error = new Error("Forbidden!");
    error.type = errorTypes.forbidden;
    next(error);
    return;
  }
  next();
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    await Thing.findByIdAndDelete(id);
    res.json({});
  } catch (error) {
    error.type = errorTypes.badRequest;
    error.info = "This is likely to be because of an invalid id";
    next(error);
  }
});

module.exports = router;
