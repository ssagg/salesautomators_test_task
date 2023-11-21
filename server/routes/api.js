const Router = require("express").Router;
const router = new Router();
const util = require("../util/helper");

router.post("/api/button", async (req, res) => {
  try {
    console.log(req.body.id);
    console.log(req.body.data);
    util.updatingCustomFieldValue(
      req.body.id,
      req.body.data.fName,
      req.body.data.lName,
      req.body.data.phone,
      req.body.data.email,
      req.body.data.address,
      req.body.data.city,
      req.body.data.state,
      req.body.data.zip,
      req.body.data.area,
      req.body.data.jobType,
      req.body.data.jobSource,
      req.body.data.jobDescription,
      req.body.data.date,
      req.body.data.startTime,
      req.body.data.endTime,
      req.body.data.testSelect
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
