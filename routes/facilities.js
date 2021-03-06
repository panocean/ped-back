const express = require("express");
const router = express.Router();

const Facilities = require("../controller/facilities");


router.get("/", (req, res, next) => {
  Facilities.getFacilities(req, res, next);
});

module.exports = router;