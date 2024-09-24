import exp from "express";
const router = exp.Router();
router.post("/login", async (req, res) => {
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
router.delete("/logout", async (req, res) => {
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
