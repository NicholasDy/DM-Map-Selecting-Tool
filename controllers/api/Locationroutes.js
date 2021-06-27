const router = require("express").Router();
const { Locations } = require('../../models/index');

router.get('/', async (req, res) => {
    try {
        const locationData = await Locations.findAll();
        const locations = locationData.map((location) =>
        location.get()
      );
        res.send(locationData)
    }
    catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router