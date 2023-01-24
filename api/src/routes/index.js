const router = require("express").Router();
const models = require("./models.routes");

router.use("/models", models);

module.exports = router;
