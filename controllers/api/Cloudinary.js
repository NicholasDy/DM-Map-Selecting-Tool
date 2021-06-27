const router = require('express').Router()
const { cloudinary } = require('../../utlis/cloudinary')

router.post('/', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'tavern',
        });
        console.log("here", uploadResponse);
        res.json({ msg: 'done' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

router.get('/Tavern', async (req, res) => {
    try {
        const { resources } = await cloudinary.v2.search
            .expression('folder: tavern')
            .max_results(30)
            .execute();

        const publicIds = resources.map((file) => file.public_id);
        res.send(publicIds);
    } catch (error) {
        console.error(error)
    }
})

module.exports = router