import exp from 'express';
const router = exp.Router();
router.post("/register", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null
        });
    }
});
router.post("/follow", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null
        });
    }
});
router.get("/search", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null
        });
    }
});
router.get("/profile", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null
        });
    }
});
router.get("/following", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null
        });
    }
});
export default router;
