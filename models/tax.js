const mongoose = require("mongoose");
const { Schema } = mongoose;

const taxesSchema = new Schema({
  ppta_edu_liquids: { type: Number },
  cita_edu_gas: { type: Number },
  year: Number
});

const Taxes = mongoose.model("Taxes", taxesSchema);

module.exports = {
  Taxes, taxesSchema
};