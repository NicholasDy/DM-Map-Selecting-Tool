const router = require("express").Router();
const { User, Npc, Encounter, Location } = require("../models/index")
const apiRouters = require('./api')

router.use("/api", apiRouters)
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
