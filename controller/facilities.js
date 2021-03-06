const util = require("util");

const Facilities = require("../models/facilities");
// const User = require("../models/users");
// const Index = require("../models/index");
// const queryHelper = require("../../lib/query");
// const ErrorHandler = require("../../lib/error");

// User.update = util.promisify(User.update);
// Recipe.update = util.promisify(Recipe.update);
// Index.update = util.promisify(Index.update);
// Recipe.aggregate = util.promisify(Recipe.aggregate);
Facilities.find = util.promisify(Facilities.find);


const getFacilities = async (req, res, next) => {
  try {
    let facilities = await Facilities.find();

    if (facilities.length === 0) {
      return res.status(404).json({ error: "No facility in database" });
    }
    res.status(200).json(facilities);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getFacilities
};