const { Router } = require('express');
const City = require('../models/City');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const data = await City.fetchAll();
        return res.json(data);
    } catch (err) {
        return res.json({ err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const result = await City.query({ where: { id: req.params.id } }).fetch();
        // const result = await City.where({ id: req.params.id }).fetch();
        return res.json({ result });
    } catch (err) {
        return res.json({ err });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name } = req.body;
        
        const city = new City();
        city.set('name', name);
        await city.save();
        return res.json({ city });

        // const data = await City.forge({ name }).save();
        // return res.json({ data });
    } catch (err) {
        return res.json({ err });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const city = await City.where({ id: req.params.id }).fetch();
        if (!city) {
            return res.status(400).end();
        }
        await city.destroy();
        return res.status(204).end();
    } catch (err) {
        return res.json({ err });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const city = await City.where({ id: req.params.id }).fetch();
        if (!city) {
            return res.status(404).end();
        }
        await city.save({ name: req.body.name }), { patch: true };
        return res.json({ city });
    } catch (err) {
        return res.json({ err });
    }
});

// router.put('/:id', async (req, res) => {
//     try {
//         const city = await City.where({ id: req.params.id }).fetch();
//         if (!city) {
//             return res.status(400).end();
//         }
//         city.set('name', req.body.name);
//         await city.save();
//         return res.json({ city });
//     } catch (err) {
//         return res.json({ err });
//     }
// });

module.exports = router;