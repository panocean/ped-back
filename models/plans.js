const mongoose = require("mongoose");
const { Schema } = mongoose;

// const {taxesSchema} = require("./tax")

const psVolumeSchema = new Schema({
  crude_condensate_gross_production: { type: Number },
  crude_oil_sales: { type: Number },
  considerate_sales: { type: Number },
  gas_gross_production: { type: Number },
  gas_sales: { type: Number },
  gas_sales_boe: { type: Number },
});

const revenueSchema = new Schema({
  oil: { type: Number },
  considerate: { type: Number },
  gas: { type: Number },
});

const opExpensesSchema = new Schema({
  royalty_liquids: { type: Number },
  royalty_gas: { type: Number },
  opex_liquids: { type: Number },
  opex_gas: { type: Number },
});

const bcRatiosSchema = new Schema({
  opex: { type: Number },
  capex: { type: Number },
  t1_t2_deduction_due: { type: Number },
  t1_t2_useable: { type: Number },
  ijdc_t1: { type: Number },
  ijdc_t2: { type: Number },
  ppta_schedule_used: { type: Number },
  interest_expense_not_used: { type: Number },
});

const taxesSchema = new Schema({
  ppta_edu_liquids: { type: Number },
  cita_edu_gas: { type: Number },
});

const plansSchema = new Schema({
  production_sales_volume: psVolumeSchema,
  revenue: revenueSchema,
  operating_expenses: opExpensesSchema,
  budget_cost_ratios: bcRatiosSchema,
  taxes: taxesSchema,
  year: { type: Number, required: true  }
});


const Plan = mongoose.model("Plan", plansSchema);

module.exports = {
  Plan,
};

//formulas
// Average Daily Volume
// Total Sales Revenue
// Total Operating
// EBIDTA
// Budget Cost Ratios
