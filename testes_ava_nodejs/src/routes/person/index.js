import { Router } from "express";
import Person from "../../schemas/person";
import mongoose from "mongoose";

const router = Router();

router.post('/', async (req, res) => {
    try {
        const person = await Person.create(req.body);
        return res.status(201).json({ person });
    } catch (err) {
        return res.status(500).json({ err });
    }
});

router.get('/', async (req, res) => {
    try {
        const all = await Person.find({});
        return res.json({ all });
    } catch (err) {
        return res.status(500).json({ err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).end();
        }
        const one = await Person.findById(req.params.id);
        return res.json({ one });
    } catch (err) {
        return res.status(500).json({ err });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).end();
        }
        await Person.findByIdAndDelete(req.params.id);
        return res.status(204).end();
    } catch (err) {
        return res.status(500).json({ err });
    }
});

export default router;