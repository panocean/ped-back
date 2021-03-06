const express = require("express");
const router = express.Router();

const Plans = require("../controller/plans");


router.get("/", (req, res, next) => {
  Plans.getPlans(req, res, next);
});

router.post("/addtax", (req, res, next) => {
  Plans.addYearTax(req, res, next);
})


router.post("/startplan", (req, res, next) => {
  Plans.startPlanByYear(req, res, next)
})

router.post("/findplan", (req, res, next) => {
  Plans.findPlanByYear(req, res, next)
})

router.post("/salesvolume", (req, res, next) => {
  Plans.updatePlanWithPsVolume(req, res, next)
})

router.post("/revenue", (req, res, next) => {
  Plans.updatePlanByWithRevenue(req, res, next)
})

router.post("/expense", (req, res, next) => {
  Plans.updatePlanWithOpExpense(req, res, next)
})

router.post("/budget", (req, res, next) => {
  Plans.updatePlanWithBCRatios(req, res, next)
})

router.post("/year/salesvolume",  (req, res, next) => {
  Plans.getPsVolumeByYear(req, res, next)
})

router.post("/year/revenue", (req, res, next) => {
  Plans.getRevenueByYear(req, res, next)
})

router.post("/year/expense", (req, res, next) => {
  Plans.getOperatingExepnsesByYear(req, res, next)
})

router.post("/year/budget", (req, res, next) => {
  Plans.getBCRatiosByYear(req, res, next)
})
module.exports = router;