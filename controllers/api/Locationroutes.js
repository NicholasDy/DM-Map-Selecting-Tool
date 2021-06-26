const router = require("express").Router();
const { Locations } = require('../../models/index');

router.get('/', async (req, res) => {
    try {
        const locationData = await Locations.findAll({
            include: [
                {
                    model: Locations,
                    attributes: ['name']
                },
            ],
        });
        const locationRender = locationData.get({plain:true})
    }
    catch {
        res.status(500).json(err);
    }
});