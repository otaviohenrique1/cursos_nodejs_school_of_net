import { Router } from "express";

const router = Router();
router.get('/', async (req, res) => {
    return res.json({msg: 'Hello' });
});

export default router;