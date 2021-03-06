const util = require("util");

const Facilities = require("../models/facilities");
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