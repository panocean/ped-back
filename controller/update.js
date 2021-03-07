const util = require("util");

const { Plan } = require("../models/plans");

Plan.create = util.promisify(Plan.create);
Plan.find = util.promisify(Plan.find);

const updatePsVolume = async (req, res, next) => {
  // let newData = [...req.param]
  let year = req.query.year
  console.log(req.body)
  // const { year } = req.body;
  
  try {
    let previousPlan = await Plan.findOne({ year });
    // update plans by year
    let plan = await Plan.findOneAndUpdate(
      { year },
      {
        $set: {
          production_sales_volume: Object.assign(
            previousPlan.production_sales_volume,
            req.body
          ),
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
    console.log(plan.production_sales_volume)
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


module.exports = {
  updatePsVolume
}

const test = { one: "hello"}
console.log(Object.assign(test, {two: "world"}))