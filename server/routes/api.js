const express = require("express");

const readingLogController = require("../controllers/readingLogController");

const router = express.Router();

router.get("/view", readingLogController.viewReadings, (req, res) => {
  res.status(200).json(res.locals.readings);
});

router.post("/add", readingLogController.addReading, (req, res) => {
  res.redirect("/");
});

module.exports = router;