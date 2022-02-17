const { model, Schema } = require("mongoose");

const ThingsSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

const Things = model("Things", ThingsSchema, "things");

module.exports = Things;
