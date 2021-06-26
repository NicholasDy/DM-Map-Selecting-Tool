const router = require("express").Router();
const {User, Npc, Encounter, Location} = require("../models/index")
const apiRouters = require('./api')

router.use("/api", apiRouters)




module.exports = router;
