// update all plans params here
const express = require("express");
const router = express.Router();

const Plans = require("../controller/update");



// http://localhost:4000/plans/update/salesvolume/?crude_oil_sales=90
router.patch("/salesvolume/", (req, res, next) => {
  Plans.updatePsVolume(req, res, next)
})

// router.post("/year/budget", (req, res, next) => {
//   Plans.getBCRatiosByYear(req, res, next)
// })
module.exports = router;