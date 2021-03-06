const util = require("util");

const {
  Plan,
} = require("../models/plans");



Plan.create = util.promisify(Plan.create);
Plan.find = util.promisify(Plan.find);

const getPlans = async (req, res, next) => {
  try {
    let plans = await Plan.find();

    if (plans.length === 0) {
      return res.status(404).json({ error: "No facility in database" });
    }
    res.status(200).json(plans);
  } catch (error) {
    console.log(error);
  }
};

const addYearTax = async (req, res, next) => {
  const { year } = req.body;
  try {
    // update plans by year
    let plan = await Plan.findOneAndUpdate(
      { year },
      {
        $set: {
          taxes: { ...req.body },
        },
      },
      { new: true }
    );
    //create a plan based on this year if none is found
    if (!plan) {
      let newPlan = await Plan.create({
        year: year,
        taxes: { ppta_edu_liquids, cita_edu_gas },
      });
      plan = newPlan;
    }
    res.status(200).json(plan);
  } catch (error) {
    console.log(error);
  }
};

const startPlanByYear = async (req, res, next) => {
  const { year } = req.body;
  try {
    let plan = await Plan.create({ year });
    plan = await plan.save();
    if (planslength === 0) {
      return res.status(404).json({ error: "operation error" });
    }
    res.status(200).json(plan);
  } catch (error) {
    console.log(error);
  }
};

const findPlanByYear = async (req, res, next) => {
  const { year } = req.body;
  try {
    let plan = await Plan.findOne({ year });

    if (plan.length === 0) {
      return res.status(404).json({ error: "Plan not found" });
    }
    res.status(200).json(plan);
  } catch (error) {
    console.log(error);
  }
};

const updatePlanWithPsVolume = async (req, res, next) => {
  const { year } = req.body;

  try {
    // update plans by year
    let plan = await Plan.findOneAndUpdate(
      { year },
      {
        $set: {
          production_sales_volume: {
            ...req.body,
          },
        },
      },
      { new: true }
    );

    //create a plan based on this year if none is found
    if (!plan) {
      let newPlan = await Plan.create({
        year: year,
        production_sales_volume: {
          ...req.body,
        },
      });
      plan = newPlan;
    }

    res.status(200).json(plan);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updatePlanByWithRevenue = async (req, res, next) => {
  const { year } = req.body;

  try {
    // update plans by year
    let plan = await Plan.findOneAndUpdate(
      { year },
      {
        $set: {
          revenue: { ...req.body },
        },
      },
      { new: true }
    );

    //create a plan based on this year if none is found
    if (!plan) {
      let newPlan = await Plan.create({ year, revenue: { ...req.body } });
      plan = newPlan;
    }
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updatePlanWithOpExpense = async(req, res, next) => {
  const { year } = req.body;

  try {
    // update plans by year
    let plan = await Plan.findOneAndUpdate(
      { year },
      {
        $set: {
          operating_expenses: {
            ...req.body,
          },
        },
      },
      { new: true }
    );

    //create a plan based on this year if none is found
    if (!plan) {
      let newPlan = await Plan.create({
        year: year,
        operating_expenses: {
          ...req.body,
        },
      });
      plan = newPlan;
    }

    res.status(200).json(plan);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const updatePlanWithBCRatios = async(req, res, next) => {
  const { year } = req.body;

  try {
    // update plans by year
    let plan = await Plan.findOneAndUpdate(
      { year },
      {
        $set: {
          budget_cost_ratios: {
            ...req.body,
          },
        },
      },
      { new: true }
    );

    //create a plan based on this year if none is found
    if (!plan) {
      let newPlan = await Plan.create({
        year: year,
        budget_cost_ratios: {
          ...req.body,
        },
      });
      plan = newPlan;
    }

    res.status(200).json(plan);
  } catch (error) {
    res.status(500).send(error.message);
  }
}


const getPsVolumeByYear = async(req, res, next) => {
  const {year} = req.body
  try {
    let plan = await Plan.findOne({ year });

    if (plan.length === 0) {
      return res.status(404).json({ error: "Plan not found" });
    }
    psVolume = plan.production_sales_volume
    res.status(200).json(psVolume);
  } catch (error) {
    console.log(error);
  }
}

const getRevenueByYear = async(req, res, next) => {
  const {year} = req.body
  try {
    let plan = await Plan.findOne({ year });

    if (plan.length === 0) {
      return res.status(404).json({ error: "Plan not found" });
    }
    revenue = plan.revenue
    res.status(200).json(revenue);
  } catch (error) {
    console.log(error);
  }
}

const getOperatingExepnsesByYear = async(req, res, next) => {
  const {year} = req.body
  try {
    let plan = await Plan.findOne({ year });

    if (plan.length === 0) {
      return res.status(404).json({ error: "Plan not found" });
    }
    operating_expenses = plan.operating_expenses
    res.status(200).json(operating_expenses);
  } catch (error) {
    console.log(error);
  }
}

const getBCRatiosByYear = async(req, res, next) => {
  const {year} = req.body
  try {
    let plan = await Plan.findOne({ year });

    if (plan.length === 0) {
      return res.status(404).json({ error: "Plan not found" });
    }
    budget_cost_ratios = plan.budget_cost_ratios
    res.status(200).json(budget_cost_ratios);
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getPlans,
  addYearTax,
  startPlanByYear,
  findPlanByYear,
  updatePlanWithPsVolume,
  updatePlanByWithRevenue,
  updatePlanWithOpExpense,
  updatePlanWithBCRatios,
  getPsVolumeByYear,
  getRevenueByYear,
  getOperatingExepnsesByYear,
  getBCRatiosByYear
};
