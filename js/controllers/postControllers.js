import exp from "express";
const router = exp.Router();
router.get("/", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: "blu blu",
            data: undefined,
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "blu blu",
            data: null,
        });
    }
});
router.post("/", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: "blu blu",
            data: undefined,
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "blu blu",
            data: null,
        });
    }
});
router.get("/search", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: "blu blu",
            data: undefined,
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "blu blu",
            data: null,
        });
    }
});
router.get("/:id", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: "blu blu",
            data: undefined,
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "blu blu",
            data: null,
        });
    }
});
router.patch("/like/:id", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: "blu blu",
            data: undefined,
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "blu blu",
            data: null,
        });
    }
});
export default router;
