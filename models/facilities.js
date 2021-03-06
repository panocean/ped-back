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


// {"_id":{"$oid":"60174c51d627b99c7e7c7e8a"},
// "flowline":"Awoba Northwest Well 1S",
// "location":"Ekulama 1",
// "design_life_span":15,
// "year_Installed_or_replaced":2002,
// "years_installed_or_laid":18,
// "planned_replacement_period":"Replace by 2015",
// "latest_replacement_date":2017,
// "complete_system_failure_indicator":"Flowline as Expired",
// "preventive_maintenace_plan":"1. Complete replacement by 2018",
// "remarks":" Clampping @RoW at 2-points."}