const mongoose = require("mongoose");
const { Schema } = mongoose;

const facilitiesSchema = new Schema({
  flowline: { type: String, required: true },
  location: { type: String, required: true },
  design_life_span: { type: Number, required: true },
  year_Installed_or_replaced: { type: Number, required: true },
  years_installed_or_laid: { type: Number, required: true },
  planned_replacement_period: { type: String, required: true },
  latest_replacement_date: { type: Number, required: true },
  complete_system_failure_indicator: { type: String, required: true },
  preventive_maintenace_plan: { type: String, required: true },
  remarks: { type: String, required: true },
});

const Facilities = mongoose.model("Facilities", facilitiesSchema);

module.exports = Facilities;
